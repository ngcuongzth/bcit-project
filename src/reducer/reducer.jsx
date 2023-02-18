import { TOGGLE_SIDEBAR, HANDLE_FORM_QA } from "../actions";
const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            if (state.isSidebarOpen) {
                return { ...state, isSidebarOpen: false }
            }
            return { ...state, isSidebarOpen: true }
        case HANDLE_FORM_QA:
            return {
                ...state, contentQA: action.payload
            }
        default:
            throw new Error(`Action ${action.type} is not matching`)
    }
}

export default reducer;