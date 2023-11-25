/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const globalInfo = {
        user,
        loading,
        setLoading
    }
    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ControlRoom