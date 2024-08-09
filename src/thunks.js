import { setImage, setModal } from './actions';

export const toggleModal = (isOpen) => {
    return (dispatch) => {
        dispatch(setModal(isOpen));
    };
};

export const saveImage = (image) => {
    return (dispatch) => {
        dispatch(setImage(image));
    };
};