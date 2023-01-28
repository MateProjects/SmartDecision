import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("i18nextLng") || "EN",
    supportedLngs: ["EN", "RU"],
    detection: {
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "assets/locales/{{lng}}/translation.json",
    },
  });
export default i18n;
