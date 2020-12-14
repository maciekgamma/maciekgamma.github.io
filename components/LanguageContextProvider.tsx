import * as React from 'react';

const value = { language: 'en', setLanguage: langeuage => {} };

export const LanguageContext = React.createContext(value);

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = React.useState('en');
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};
