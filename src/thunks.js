import { setImages, setLoading } from "./actions";
import { fetchImages } from "./api";

export const loadImages = (query) => async (dispatch) => {
    dispatch(setLoading(true));
    const images = await fetchImages(query);
    dispatch(setImages(images));
};