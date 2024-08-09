import { SET_IMAGE, SET_LOADING, SET_MODAL } from "./actions";

const initialState = {
    image: [],
    isLoading: false,
    modalOpen: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE:
            return { ...state, image: action.payload, isLoading: false };
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_MODAL:
            return { ...state, modalOpen: action.payload };
        default:
            return state;
    }
};

export default reducer;