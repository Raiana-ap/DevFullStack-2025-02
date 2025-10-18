import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(light);

    const dark = () => setTheme(dark);
    const light = () => setTheme(light);

    const value = useMemo(() => ({theme, dark, light}), [theme]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useTheme
() {
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error("useAuth deve ser utilizado dentro do Provedor.");
    return ctx;
}