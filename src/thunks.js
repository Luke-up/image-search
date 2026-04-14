import { setImage, setModal } from './actions';

// Thin thunk wrappers keep component code consistent with async flows.
export const toggleModal = (isOpen) => (dispatch) => {
  dispatch(setModal(isOpen));
};

export const saveImage = (image) => (dispatch) => {
  dispatch(setImage(image));
};