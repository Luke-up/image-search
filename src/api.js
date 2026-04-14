import { createClient } from 'pexels';

const apiKey = process.env.REACT_APP_PEXELS_API_KEY;
// Reuse one client instance rather than creating a new one every search.
const client = apiKey ? createClient(apiKey) : null;

export const fetchImages = async (query) => {
  if (!query?.trim() || !client) {
    return [];
  }

  try {
    const photos = await client.photos.search({ query, per_page: 3 });
    return photos.photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
