export const SET_IMAGE = 'SET_IMAGE';
export const SET_LOADING = 'SET_LOADING';
export const SET_MODAL = 'SET_MODAL';

// Stores the selected image object from Pexels in Redux state.
export const setImage = (image) => ({
  type: SET_IMAGE,
  payload: image,
});

// Toggles async loading state for future request-driven UI updates.
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

// Opens or closes the image picker modal.
export const setModal = (isOpen) => ({
  type: SET_MODAL,
  payload: isOpen,
});