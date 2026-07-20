import React, { useState, useEffect, useReducer, useContext, useCallback } from "react";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import SyncIcon from "@material-ui/icons/Sync";

import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import MainHeaderButtonsWrapper from "../../components/MainHeaderButtonsWrapper";
import Title from "../../components/Title";

import api from "../../services/api";
import { i18n } from "../../translate/i18n";
import TableRowSkeleton from "../../components/TableRowSkeleton";
import ConfirmationModal from "../../components/ConfirmationModal";
import toastError from "../../errors/toastError";
import { AuthContext } from "../../context/Auth/AuthContext";

const reducer = (state, action) => {
  if (action.type === "LOAD_TEMPLATES") {
    const templates = action.payload;
    const newTemplates = [];

    if (Array.isArray(templates)) {
      templates.forEach((template) => {
        const templateIndex = state.findIndex((t) => t.id === template.id);
        if (templateIndex !== -1) {
          state[templateIndex] = template;
        } else {
          newTemplates.push(template);
        }
      });
    }

    return [...state, ...newTemplates];
  }

  if (action.type === "UPDATE_TEMPLATE") {
    const template = action.payload;
    const templateIndex = state.findIndex((t) => t.id === template.id);

    if (templateIndex !== -1) {
      state[templateIndex] = template;
      return [...state];
    } else {
      return [template, ...state];
    }
  }

  if (action.type === "DELETE_TEMPLATE") {
    const templateId = action.payload;
    const templateIndex = state.findIndex((t) => t.id === templateId);
    if (templateIndex !== -1) {
      state.splice(templateIndex, 1);
    }
    return [...state];
  }

  if (action.type === "RESET") {
    return [];
  }
};

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(1),
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
  searchField: {
    marginRight: theme.spacing(2),
  },
  syncButton: {
    marginRight: theme.spacing(1),
  },
  statusApproved: {
    backgroundColor: "#4caf50",
    color: "#fff",
  },
  statusPending: {
    backgroundColor: "#ff9800",
    color: "#fff",
  },
  statusRejected: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  statusDisabled: {
    backgroundColor: "#9e9e9e",
    color: "#fff",
  },
  categoryMarketing: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  categoryUtility: {
    backgroundColor: "#9c27b0",
    color: "#fff",
  },
  categoryAuthentication: {
    backgroundColor: "#ff5722",
    color: "#fff",
  },
}));

const MessageTemplates = () => {
  const classes = useStyles();
  const { user, socket } = useContext(AuthContext);

  const [templates, dispatch] = useReducer(reducer, []);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [templateToDelete, setTemplateToDelete] = useState(null);
  const [syncModalOpen, setSyncModalOpen] = useState(false);
  const [syncLoading, setSyncLoading] = useState(false);
  const [wabaId, setWabaId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      try {
        const { data } = await api.get("/message-templates");
        dispatch({ type: "LOAD_TEMPLATES", payload: data });
      } catch (err) {
        toastError(err);
      }
      setLoading(false);
    };

    fetchTemplates();
  }, []);

  useEffect(() => {
    const handleTemplateUpdate = (data) => {
      if (data.action === "create" || data.action === "update") {
        dispatch({ type: "UPDATE_TEMPLATE", payload: data.template });
      }
      if (data.action === "delete") {
        dispatch({ type: "DELETE_TEMPLATE", payload: data.templateId });
      }
    };

    socket.on(`company-${user.companyId}-messageTemplate`, handleTemplateUpdate);

    return () => {
      socket.off(`company-${user.companyId}-messageTemplate`, handleTemplateUpdate);
    };
  }, [socket, user.companyId]);

  const handleDelete = async () => {
    try {
      await api.delete(`/message-templates/${templateToDelete.id}`);
      toast.success(i18n.t("messageTemplates.deleteSuccess"));
      dispatch({ type: "DELETE_TEMPLATE", payload: templateToDelete.id });
    } catch (err) {
      toastError(err);
    }
    setConfirmModalOpen(false);
    setTemplateToDelete(null);
  };

  const handleSync = async () => {
    if (!wabaId || !accessToken) {
      toast.error(i18n.t("messageTemplates.syncError"));
      return;
    }

    setSyncLoading(true);
    try {
      const { data } = await api.post("/message-templates/sync", {
        wabaId,
        accessToken
      });
      toast.success(i18n.t("messageTemplates.syncSuccess"));
      dispatch({ type: "RESET" });
      const { data: updatedTemplates } = await api.get("/message-templates");
      dispatch({ type: "LOAD_TEMPLATES", payload: updatedTemplates });
      setSyncModalOpen(false);
      setWabaId("");
      setAccessToken("");
    } catch (err) {
      toastError(err);
    }
    setSyncLoading(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "APPROVED":
        return classes.statusApproved;
      case "PENDING":
        return classes.statusPending;
      case "REJECTED":
        return classes.statusRejected;
      case "DISABLED":
        return classes.statusDisabled;
      default:
        return classes.statusPending;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "MARKETING":
        return classes.categoryMarketing;
      case "UTILITY":
        return classes.categoryUtility;
      case "AUTHENTICATION":
        return classes.categoryAuthentication;
      default:
        return "";
    }
  };

  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainContainer>
      <MainHeader>
        <Title>{i18n.t("messageTemplates.title")}</Title>
        <MainHeaderButtonsWrapper>
          <Button
            variant="contained"
            color="primary"
            className={classes.syncButton}
            startIcon={syncLoading ? <CircularProgress size={20} /> : <SyncIcon />}
            onClick={() => setSyncModalOpen(true)}
            disabled={syncLoading}
          >
            {i18n.t("messageTemplates.sync")}
          </Button>
        </MainHeaderButtonsWrapper>
      </MainHeader>
      <Paper className={classes.mainPaper} variant="outlined">
        <TextField
          className={classes.searchField}
          size="small"
          placeholder={i18n.t("messageTemplates.searchPlaceholder")}
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} />
              </InputAdornment>
            ),
          }}
        />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>{i18n.t("messageTemplates.name")}</TableCell>
              <TableCell>{i18n.t("messageTemplates.language")}</TableCell>
              <TableCell>{i18n.t("messageTemplates.category")}</TableCell>
              <TableCell>{i18n.t("messageTemplates.status")}</TableCell>
              <TableCell align="right">
                {i18n.t("messageTemplates.actions")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRowSkeleton columns={5} />
            ) : filteredTemplates.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  {i18n.t("messageTemplates.noTemplates")}
                </TableCell>
              </TableRow>
            ) : (
              filteredTemplates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell>{template.name}</TableCell>
                  <TableCell>{template.language}</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={template.category}
                      className={getCategoryColor(template.category)}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={template.status}
                      className={getStatusColor(template.status)}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={() => {
                        setTemplateToDelete(template);
                        setConfirmModalOpen(true);
                      }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
      <ConfirmationModal
        title={i18n.t("messageTemplates.deleteConfirm")}
        open={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        onConfirm={handleDelete}
      />
      {syncModalOpen && (
        <ConfirmationModal
          title={i18n.t("messageTemplates.syncTitle")}
          open={syncModalOpen}
          onClose={() => setSyncModalOpen(false)}
          onConfirm={handleSync}
          confirmText={i18n.t("messageTemplates.sync")}
          confirmLoading={syncLoading}
        >
          <TextField
            fullWidth
            margin="normal"
            label="WABA ID"
            value={wabaId}
            onChange={(e) => setWabaId(e.target.value)}
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Access Token"
            value={accessToken}
            onChange={(e) => setAccessToken(e.target.value)}
            variant="outlined"
            size="small"
            type="password"
          />
        </ConfirmationModal>
      )}
    </MainContainer>
  );
};

export default MessageTemplates;
