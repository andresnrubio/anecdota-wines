import React, { useState, useEffect, createContext } from 'react';
import languagtranslationses from '../languages/translations';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState(
    window.navigator.language.slice(0, 2) || 'en'
  );

  useEffect(() => {
    const userLanguage = window.navigator.language.slice(0, 2) || 'en';
    setLanguage(userLanguage);
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  let translationsForSelectedLanguage = translations;

  if (language !== 'es') {
    translationsForSelectedLanguage = Object.keys(translations).reduce(
      (acc, key) => {
        acc[key] = translations[key][language];
        return acc;
      },
      {}
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        translations: translationsForSelectedLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};
