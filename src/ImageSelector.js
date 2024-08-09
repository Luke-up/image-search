import React, { useState } from 'react';
import { Container, Grid, CircularProgress, Card, CardMedia, CardContent, Typography } from '@mui/material';
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
      <button onClick={() => findImage(query)}>Search</button>
      <button onClick={() => closeModal()}>Close</button>
      <Grid container spacing={3}>
      {loading ? (
          <CircularProgress />
        ) : (
          images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id} onClick={() => {
              saveProfilePicture(image);
            }}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={image.src.medium}
                  alt={image.photographer}
                />
                <CardContent>
                  <Typography variant="body2" color="text.primary">
                    {image.photographer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default ImageSelector;
