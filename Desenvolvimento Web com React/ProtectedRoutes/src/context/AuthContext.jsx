import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user, setUser] = useState(null)    

    const login = (username, password) => {   
        if(username === 'admin' && password === '1234') {
            setUser({ username })             
        }
    }

    const logout = () => setUser(null)   

    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}                       
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(!context) return;
    return context;
}
