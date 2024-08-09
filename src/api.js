import { createClient } from 'pexels';

export const fetchImages = async (query) => {
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

    try {
        const photos = await client.photos.search({ query, per_page: 3 });
        console.log(photos.photos);
        return photos.photos;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
};



