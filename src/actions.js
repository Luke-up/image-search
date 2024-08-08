export const SET_IMAGES = "SET_IMAGES";
export const SET_LOADING = "SET_LOADING";

export const setImages = (images) => ({
    type: SET_IMAGES,
    payload: images,
});

export const setLoading = (loading) => ({
    type : SET_LOADING,
    payload: loading,
});