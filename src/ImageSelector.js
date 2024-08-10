import React, { useState } from 'react';
import { Container, Grid, CircularProgress, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { fetchImages } from './api';
import { toggleModal, saveImage } from './thunks';
import { useDispatch } from 'react-redux';

const ImageSelector = () => {

  const [ images, setImages ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const dispatch = useDispatch();

  async function findImage(query) {
    setLoading(true);
    try {
      const response = await fetchImages(query);
      if (response) {
        setImages(response);
      } else {
        setImages([]);
        console.log('No images found');
        console.log(response)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  function saveProfilePicture(image) {
    console.log('Saving profile picture:', image);
    dispatch(saveImage(image));
    closeModal();
  }

  function closeModal() {
    setImages([]);
    setQuery('');
    dispatch(toggleModal(false));
  }

  return (
    <Container className="imageSearchModal">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="button-container">
        <Button variant="contained" onClick={() => findImage(query)}>Search</Button>
        <Button variant="contained" onClick={() => closeModal()}>Close</Button>
      </div>
      <div className="image-container">
      {loading ? (
          <CircularProgress />
        ) : (
          images.map((image) => (
            <div className="image-options" key={image.id} >
              <div className="image-card" onClick={() => {
              saveProfilePicture(image);
            }}>
                <img
                  src={image.src.medium}
                  alt={image.photographer}
                />
                  <p variant="body2" color="text.primary">
                    {image.photographer}
                  </p>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
};

export default ImageSelector;
