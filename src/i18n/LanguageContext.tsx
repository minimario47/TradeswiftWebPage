import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'sv';

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
};

const STORAGE_KEY = 'tradeswift-language';
const DEFAULT_LANGUAGE: Language = 'en';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === 'undefined') {
            return DEFAULT_LANGUAGE;
        }
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return stored === 'sv' || stored === 'en' ? stored : DEFAULT_LANGUAGE;
    });

    useEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }
        document.documentElement.lang = language;
        window.localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    const value = useMemo(() => ({ language, setLanguage }), [language]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
