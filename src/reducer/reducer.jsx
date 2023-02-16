import { TOGGLE_SIDEBAR } from "../actions";
const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            if (state.isSidebarOpen) {
                return { ...state, isSidebarOpen: false }
            }
            return { ...state, isSidebarOpen: true }
        default:
            throw new Error(`Action ${action.type} is not matching`)
    }
}

export default reducer;