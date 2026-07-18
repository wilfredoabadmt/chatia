import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { messages } from "./languages";

const savedLanguage = localStorage.getItem("i18nextLng");
if (!savedLanguage || savedLanguage.startsWith("pt") || savedLanguage === "pt-BR") {
  localStorage.setItem("i18nextLng", "es");
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "es",
    defaultNS: ["translations"],
    ns: ["translations"],
    resources: messages,
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    }
  });

export { i18n };
