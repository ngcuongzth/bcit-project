import { useContext, createContext, useReducer } from "react";
import reducer from "../reducer/reducer";
import { TOGGLE_SIDEBAR, HANDLE_FORM_QA } from "../actions";

const GlobalContext = createContext()
const initialState = {
    isSidebarOpen: false,
    contentQA: {
        name: '',
        email: '',
        tel: '',
        title: '',
        content: ''
    }
}


const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleToggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR })
    }

    const handleSubmitQA = (data) => {
        dispatch({
            type: HANDLE_FORM_QA,
            payload: data
        })
    }
    return <GlobalContext.Provider value={{
        handleToggleSidebar, state, handleSubmitQA
    }}>
        {children}
    </GlobalContext.Provider>
}
export default GlobalProvider;
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}