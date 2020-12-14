import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

type ContextValueType = {
  language: string;
  setLanguage: Function | undefined;
};

const value: ContextValueType = { language: 'en', setLanguage: undefined };

export const LanguageContext = React.createContext(value);

export const LanguageContextProvider = (props: Props) => {
  const [language, setLanguage] = React.useState('en');
  return <LanguageContext.Provider value={{ language, setLanguage }}>{props.children}</LanguageContext.Provider>;
};
