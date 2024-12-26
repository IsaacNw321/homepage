import React, { createContext, useState, useEffect, useContext } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

const LanguageContext = createContext(es);

export function UseT(){
  return useContext(LanguageContext);
}
const initialLanguage = 'es'
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [translations, setTranslations] = useState(es);

  useEffect(() => {
    const userLanguage = navigator.language || navigator.language;
    const initialLanguage = userLanguage.startsWith('es') ? 'es' : 'en';
    setLanguage(initialLanguage);
    setTranslations(language === 'es' ? es : en);
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    setTranslations(lang === 'es' ? es : en);
  };
  const data = {language, switchLanguage, translations}
  return (
    <LanguageContext.Provider value={data}>
      {children}
    </LanguageContext.Provider>
  );
};