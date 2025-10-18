import { createContext, useCallback, useContext, useState, useMemo, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    }, []);

    useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [theme]);

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return <ThemeContext value={value}>{children}</ThemeContext>
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if(!ctx) throw new Error("useTheme deve ser utilizado dentro do Provedor.");
    return ctx;
}