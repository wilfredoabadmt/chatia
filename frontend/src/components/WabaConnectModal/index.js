import React, { useState, useContext } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";

import api from "../../services/api";
import { i18n } from "../../translate/i18n";
import toastError from "../../errors/toastError";
import { AuthContext } from "../../context/Auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: 4,
  },
  field: {
    width: "100%",
  },
  infoBox: {
    backgroundColor: "#e3f2fd",
    padding: theme.spacing(2),
    borderRadius: 4,
    marginBottom: theme.spacing(2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));

const WabaSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, i18n.t("validation.tooShort"))
    .max(50, i18n.t("validation.tooLong"))
    .required(i18n.t("validation.required")),
  wabaId: Yup.string().required(i18n.t("validation.required")),
  phoneNumberId: Yup.string().required(i18n.t("validation.required")),
  accessToken: Yup.string().required(i18n.t("validation.required")),
  number: Yup.string().required(i18n.t("validation.required")),
});

const WabaConnectModal = ({ open, onClose }) => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  const initialState = {
    name: "",
    wabaId: "",
    phoneNumberId: "",
    accessToken: "",
    number: "",
  };

  const handleSave = async (values) => {
    try {
      const payload = {
        companyId: user.companyId,
        name: values.name,
        wabaId: values.wabaId,
        phoneNumberId: values.phoneNumberId,
        accessToken: values.accessToken,
        number: values.number,
      };

      await api.post("/whatsapp-cloud/connect", payload);
      toast.success(i18n.t("wabaConnectModal.success"));
      handleClose();
    } catch (err) {
      toastError(err);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={1}>
          <WhatsApp style={{ color: "#00a884" }} />
          {i18n.t("wabaConnectModal.title")}
        </Box>
      </DialogTitle>
      <Formik
        initialValues={initialState}
        validationSchema={WabaSchema}
        onSubmit={(values) => handleSave(values)}
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
          <Form>
            <DialogContent>
              <Box className={classes.infoBox}>
                <Typography variant="body2">
                  {i18n.t("wabaConnectModal.infoText")}{" "}
                  <Link
                    href="https://toi.bo/embedded-whatsapp/"
                    target="_blank"
                    rel="noopener"
                    className={classes.link}
                  >
                    {i18n.t("wabaConnectModal.infoLink")}
                  </Link>
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="name"
                    label={i18n.t("wabaConnectModal.name")}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    className={classes.field}
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="wabaId"
                    label={i18n.t("wabaConnectModal.wabaId")}
                    error={touched.wabaId && Boolean(errors.wabaId)}
                    helperText={touched.wabaId && errors.wabaId}
                    className={classes.field}
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={touched.wabaId && errors.wabaId ? errors.wabaId : i18n.t("wabaConnectModal.wabaIdHint")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="phoneNumberId"
                    label={i18n.t("wabaConnectModal.phoneNumberId")}
                    error={touched.phoneNumberId && Boolean(errors.phoneNumberId)}
                    helperText={touched.phoneNumberId && errors.phoneNumberId}
                    className={classes.field}
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={touched.phoneNumberId && errors.phoneNumberId ? errors.phoneNumberId : i18n.t("wabaConnectModal.phoneNumberIdHint")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="accessToken"
                    label={i18n.t("wabaConnectModal.accessToken")}
                    error={touched.accessToken && Boolean(errors.accessToken)}
                    helperText={touched.accessToken && errors.accessToken}
                    className={classes.field}
                    variant="outlined"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="number"
                    label={i18n.t("wabaConnectModal.number")}
                    error={touched.number && Boolean(errors.number)}
                    helperText={touched.number && errors.number}
                    className={classes.field}
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="+5511999999999"
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                {i18n.t("wabaConnectModal.cancel")}
              </Button>
              <Button
                type="submit"
                color="primary"
                disabled={isSubmitting}
                variant="contained"
                startIcon={
                  isSubmitting ? <CircularProgress size={20} /> : null
                }
              >
                {i18n.t("wabaConnectModal.connect")}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default WabaConnectModal;
