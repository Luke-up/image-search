export const SET_IMAGE = "SET_IMAGE";
export const SET_LOADING = "SET_LOADING";
export const SET_MODAL = "SET_MODAL";

export const setImage = (image) => ({
    type: SET_IMAGE,
    payload: image,
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});

export const setModal = (isOpen) => ({
    type: SET_MODAL,
    payload: isOpen,
});