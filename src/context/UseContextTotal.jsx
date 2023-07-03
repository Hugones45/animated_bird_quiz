import { useContext, createContext, useState } from "react";

export const UseContextTotal = createContext()

export const UseContextTotalProvider = ({ children }) => {

    const [theTotal, setTheTotal] = useState(0)

    return (
        <UseContextTotal.Provider value={{ theTotal, setTheTotal }}>
            {children}


        </UseContextTotal.Provider>
    )
}

export function useTheTotalContext() {
    return useContext(UseContextTotal)
}