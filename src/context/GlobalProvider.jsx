import { useContext, createContext, useReducer } from "react";
import reducer from "../reducer/reducer";
import { TOGGLE_SIDEBAR } from "../actions";

const GlobalContext = createContext()
const initialState = {
    isSidebarOpen: false
}


const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleToggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR })
    }

    return <GlobalContext.Provider value={{
        handleToggleSidebar, state
    }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider;
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}