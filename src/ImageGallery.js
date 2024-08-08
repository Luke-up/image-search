import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadImages } from './thunks';
import { Container, Grid, CircularProgress, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageGallery = () => {
  const dispatch = useDispatch();
  const { images, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadImages('nature'));
  }, [dispatch]);

  if (isLoading) return <CircularProgress />;
  console.log(images);
  return (
    <Container>
      <Grid container spacing={2}>
        {images.photos.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.src.small}>
            <Card>
              <CardMedia component="img" image={image.src.small} alt={image.src.small} />
              <CardContent>
                <Typography variant="h6">{image.src.small}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImageGallery;
