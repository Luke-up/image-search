import { createClient } from 'pexels';

export const fetchImages = async (query) => {
    const client = createClient(process.env.PEXELS_API_KEY);

    client.photos.search({ query, per_page: 3 }).then(photos => {
        console.log(photos);
       return photos; 
    });
    
};



