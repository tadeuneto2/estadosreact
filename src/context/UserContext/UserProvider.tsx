import { ReactElement, createContext, useState } from "react";

type UserContextProps = {
    title: string
    isLogged: boolean
    alteraTitulo?: () => void
}

export const UserContext = createContext({} as UserContextProps)



export const UserProvider = ({ children }: { children: ReactElement }) => {
    return (
        <UserContext.Provider value={{ title: "OutroTexto", isLogged: true }} >
            {children}
        </UserContext.Provider>
    )
}