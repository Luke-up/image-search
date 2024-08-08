import {SET_IMAGES, SET_LOADING} from "./actions";

const initialState = {
    images: [],
    isLoading: false,
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {...state, images: action.payload, isLoading: false};
        case SET_LOADING:
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
};

export default imageReducer;