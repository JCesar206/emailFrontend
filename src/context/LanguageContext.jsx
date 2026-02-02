import { createContext, useContext, useState } from "react";
import es from "../i18n/es";
import en from "../i18n/en";

const languages = {
  es,
  en
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const t = (key) => {
    const keys = key.split(".");
    let value = languages[lang];

    for (const k of keys) {
      value = value?.[k];
      if (!value) return key;
    }

    return value;
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);