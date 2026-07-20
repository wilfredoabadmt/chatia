import React, { useState, useContext, useEffect, useCallback } from "react";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  CircularProgress,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";

import api from "../../services/api";
import { i18n } from "../../translate/i18n";
import toastError from "../../errors/toastError";
import { AuthContext } from "../../context/Auth/AuthContext";

const META_APP_ID = process.env.REACT_APP_META_APP_ID || "";
const META_CONFIG_ID = process.env.REACT_APP_META_CONFIG_ID || "";
const META_GRAPH_VERSION = process.env.REACT_APP_META_GRAPH_VERSION || "v24.0";

declare global {
  interface Window {
    FB?: any;
    fbAsyncInit?: () => void;
  }
}

const useStyles = makeStyles((theme) => ({
  infoBox: {
    backgroundColor: "#e8f5e9",
    padding: theme.spacing(2),
    borderRadius: 8,
    marginBottom: theme.spacing(2),
    border: "1px solid #c8e6c9",
  },
  loadingBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
  },
  successBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    textAlign: "center",
  },
  connectButton: {
    backgroundColor: "#25D366",
    color: "#ffffff",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: 8,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#128C7E",
    },
    "&:disabled": {
      backgroundColor: "#cccccc",
    },
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));

const WhatsAppEmbeddedSignupModal = ({ open, onClose }) => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [success, setSuccess] = useState(false);
  const [connectedNumber, setConnectedNumber] = useState("");
  const [connectedName, setConnectedName] = useState("");

  // Load Meta SDK
  useEffect(() => {
    if (!META_APP_ID) {
      console.warn("[Embedded Signup] REACT_APP_META_APP_ID not configured");
      return;
    }

    // Check if SDK is already loaded
    if (window.FB) {
      setSdkReady(true);
      return;
    }

    // Load SDK script
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: META_APP_ID,
        autoLogAppEvents: true,
        xfbml: false,
        version: META_GRAPH_VERSION,
      });
      setSdkReady(true);
    };

    return () => {
      // Cleanup: remove script if component unmounts
      const existingScript = document.querySelector(
        `script[src="https://connect.facebook.net/en_US/sdk.js"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleSuccess = useCallback(
    (whatsappId: number, number: string, name: string) => {
      setSuccess(true);
      setConnectedNumber(number);
      setConnectedName(name);
      toast.success(
        i18n.t("embeddedSignup.success") || "WhatsApp connected successfully!"
      );
    },
    []
  );

  const launchEmbeddedSignup = useCallback(() => {
    if (!window.FB) {
      toast.error(
        i18n.t("embeddedSignup.sdkNotLoaded") ||
          "Meta SDK not loaded. Please refresh and try again."
      );
      return;
    }

    setLoading(true);

    const fbLoginCallback = async (response: any) => {
      if (response.error) {
        console.error("[Embedded Signup] FB.login error:", response.error);
        toast.error(
          response.error.message ||
            i18n.t("embeddedSignup.error") ||
            "Error during WhatsApp connection"
        );
        setLoading(false);
        return;
      }

      if (response.authResponse && response.authResponse.code) {
        const code = response.authResponse.code;

        try {
          // Send code to backend for token exchange
          const result = await api.post("/whatsapp/exchange-token", {
            code,
            wabaId: response.authResponse.waba_id || null,
            phoneNumberId: response.authResponse.phone_number_id || null,
          });

          if (result.data?.success) {
            handleSuccess(
              result.data.whatsappId,
              result.data.number || "",
              result.data.name || ""
            );
          } else {
            toast.error(
              i18n.t("embeddedSignup.error") ||
                "Failed to connect WhatsApp. Please try again."
            );
          }
        } catch (err) {
          console.error("[Embedded Signup] Backend error:", err);
          toastError(err);
        }
      } else {
        // User cancelled or something went wrong
        toast.info(
          i18n.t("embeddedSignup.cancelled") ||
            "WhatsApp connection cancelled."
        );
      }

      setLoading(false);
    };

    window.FB.login(fbLoginCallback, {
      config_id: META_CONFIG_ID,
      response_type: "code",
      override_default_response_type: true,
      extras: {
        setup: {},
        featureType: "whatsapp_business_app_onboarding",
        sessionInfoVersion: "3",
      },
    });
  }, [handleSuccess]);

  const handleClose = useCallback(() => {
    setSuccess(false);
    setConnectedNumber("");
    setConnectedName("");
    setLoading(false);
    onClose();
  }, [onClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={1}>
          <WhatsApp style={{ color: "#25D366" }} />
          {i18n.t("embeddedSignup.title") || "Connect WhatsApp Business"}
        </Box>
      </DialogTitle>
      <DialogContent>
        {success ? (
          <Box className={classes.successBox}>
            <WhatsApp style={{ fontSize: 60, color: "#25D366" }} />
            <Typography variant="h6" style={{ color: "#25D366" }}>
              {i18n.t("connected") || "Connected!"}
            </Typography>
            {connectedNumber && (
              <Typography variant="body1">
                {i18n.t("embeddedSignup.phoneNumber") || "Phone number"}:{" "}
                <strong>{connectedNumber}</strong>
              </Typography>
            )}
            {connectedName && (
              <Typography variant="body2" color="textSecondary">
                {connectedName}
              </Typography>
            )}
          </Box>
        ) : loading ? (
          <Box className={classes.loadingBox}>
            <CircularProgress size={48} style={{ color: "#25D366" }} />
            <Typography variant="body1">
              {i18n.t("embeddedSignup.connecting") ||
                "Connecting your WhatsApp Business..."}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {i18n.t("embeddedSignup.connectingHint") ||
                "Follow the instructions in the Facebook popup"}
            </Typography>
          </Box>
        ) : (
          <>
            <Box className={classes.infoBox}>
              <Typography variant="body2">
                {i18n.t("embeddedSignup.infoText") ||
                  "You will be redirected to Facebook to authorize your WhatsApp Business account. Make sure you are logged into the Facebook account associated with your WhatsApp Business."}
              </Typography>
            </Box>

            {!META_APP_ID || !META_CONFIG_ID ? (
              <Box textAlign="center" p={3}>
                <Typography variant="body2" color="error">
                  {i18n.t("embeddedSignup.notConfigured") ||
                    "Embedded Signup is not configured. Please contact your administrator."}
                </Typography>
              </Box>
            ) : (
              <Box textAlign="center" py={3}>
                <Button
                  variant="contained"
                  className={classes.connectButton}
                  onClick={launchEmbeddedSignup}
                  disabled={!sdkReady || loading}
                  startIcon={<WhatsApp />}
                >
                  {i18n.t("embeddedSignup.connectButton") ||
                    "Connect my WhatsApp Business"}
                </Button>
                {!sdkReady && (
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    style={{ display: "block", marginTop: 8 }}
                  >
                    {i18n.t("embeddedSignup.loadingSdk") ||
                      "Loading Facebook SDK..."}
                  </Typography>
                )}
              </Box>
            )}

            <Box mt={2} textAlign="center">
              <Typography variant="caption" color="textSecondary">
                {i18n.t("embeddedSignup.manualOption") ||
                  "Prefer to enter credentials manually?"}{" "}
                <Link
                  href="https://toi.bo/embedded-whatsapp/"
                  target="_blank"
                  rel="noopener"
                  className={classes.link}
                >
                  {i18n.t("embeddedSignup.manualLink") ||
                    "Use the activation portal"}
                </Link>
              </Typography>
            </Box>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          {success
            ? i18n.t("embeddedSignup.done") || "Done"
            : i18n.t("embeddedSignup.cancel") || "Cancel"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WhatsAppEmbeddedSignupModal;
