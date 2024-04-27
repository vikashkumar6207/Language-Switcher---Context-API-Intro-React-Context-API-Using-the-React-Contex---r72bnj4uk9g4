"use client"

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({Children}) => {
    
    const [language, setLanguage] = useState("en");
    
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {Children}
        </LanguageContext.Provider>
    );
};








