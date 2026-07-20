import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Box,
  CircularProgress,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WhatsApp } from "@material-ui/icons";
import api from "../../services/api";
import { i18n } from "../../translate/i18n";
import toastError from "../../errors/toastError";
import { AuthContext } from "../../context/Auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  dialog: {
    minWidth: 500,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  templateInfo: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(2),
    borderRadius: 4,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paramField: {
    marginTop: theme.spacing(2),
  },
  statusApproved: {
    backgroundColor: "#4caf50",
    color: "#fff",
  },
}));

const MessageTemplateSelector = ({ open, onClose, onSend, ticketChannel }) => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [bodyParams, setBodyParams] = useState([]);
  const [headerParams, setHeaderParams] = useState([]);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (open) {
      fetchTemplates();
    }
  }, [open]);

  const fetchTemplates = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/message-templates");
      const approvedTemplates = data.filter((t) => t.status === "APPROVED");
      setTemplates(approvedTemplates);
    } catch (err) {
      toastError(err);
    }
    setLoading(false);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setBodyParams([]);
    setHeaderParams([]);

    if (template.components) {
      const bodyComponent = template.components.find(
        (c) => c.type === "BODY"
      );
      if (bodyComponent?.parameters) {
        setBodyParams(
          bodyComponent.parameters.map((p) => ({ ...p, value: "" }))
        );
      }

      const headerComponent = template.components.find(
        (c) => c.type === "HEADER"
      );
      if (headerComponent?.parameters) {
        setHeaderParams(
          headerComponent.parameters.map((p) => ({ ...p, value: "" }))
        );
      }
    }
  };

  const handleSend = async () => {
    if (!selectedTemplate) return;

    setSending(true);
    try {
      await onSend({
        templateId: selectedTemplate.id,
        templateName: selectedTemplate.name,
        language: selectedTemplate.language,
        headerParams,
        bodyParams,
      });
      handleClose();
    } catch (err) {
      toastError(err);
    }
    setSending(false);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
    setBodyParams([]);
    setHeaderParams([]);
    onClose();
  };

  if (ticketChannel !== "waba") {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      className={classes.dialog}
    >
      <DialogTitle>
        <Box className={classes.header}>
          <WhatsApp style={{ color: "#00a884" }} />
          {i18n.t("messageTemplates.sendTemplate")}
        </Box>
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <Box display="flex" justifyContent="center" p={3}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>{i18n.t("messageTemplates.selectTemplate")}</InputLabel>
              <Select
                value={selectedTemplate?.id || ""}
                onChange={(e) => {
                  const template = templates.find((t) => t.id === e.target.value);
                  if (template) handleTemplateSelect(template);
                }}
                label={i18n.t("messageTemplates.selectTemplate")}
              >
                {templates.map((template) => (
                  <MenuItem key={template.id} value={template.id}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <span>{template.name}</span>
                      <Chip
                        size="small"
                        label={template.language}
                        style={{ marginLeft: "auto" }}
                      />
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {selectedTemplate && (
              <Box className={classes.templateInfo}>
                <Typography variant="subtitle2" gutterBottom>
                  {selectedTemplate.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {selectedTemplate.body || "No body content"}
                </Typography>
                <Box display="flex" gap={1} mt={1}>
                  <Chip size="small" label={selectedTemplate.category} />
                  <Chip
                    size="small"
                    label={selectedTemplate.language}
                    className={classes.statusApproved}
                  />
                </Box>
              </Box>
            )}

            {headerParams.length > 0 && (
              <Typography variant="subtitle2" style={{ marginTop: 16 }}>
                {i18n.t("messageTemplates.headerParams")}
              </Typography>
            )}
            {headerParams.map((param, index) => (
              <TextField
                key={`header-${index}`}
                fullWidth
                variant="outlined"
                size="small"
                label={`${param.type || "text"} ${index + 1}`}
                value={param.value}
                onChange={(e) => {
                  const newParams = [...headerParams];
                  newParams[index].value = e.target.value;
                  setHeaderParams(newParams);
                }}
                className={classes.paramField}
              />
            ))}

            {bodyParams.length > 0 && (
              <Typography variant="subtitle2" style={{ marginTop: 16 }}>
                {i18n.t("messageTemplates.bodyParams")}
              </Typography>
            )}
            {bodyParams.map((param, index) => (
              <TextField
                key={`body-${index}`}
                fullWidth
                variant="outlined"
                size="small"
                label={`{{${index + 1}}}`}
                value={param.value}
                onChange={(e) => {
                  const newParams = [...bodyParams];
                  newParams[index].value = e.target.value;
                  setBodyParams(newParams);
                }}
                className={classes.paramField}
              />
            ))}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          {i18n.t("messageTemplates.cancel")}
        </Button>
        <Button
          onClick={handleSend}
          color="primary"
          variant="contained"
          disabled={!selectedTemplate || sending}
          startIcon={sending ? <CircularProgress size={20} /> : null}
        >
          {i18n.t("messageTemplates.send")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageTemplateSelector;
