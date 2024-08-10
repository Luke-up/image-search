import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageSelector from './ImageSelector';
import ProfilePicture from './ProfilePicture';
import { toggleModal } from './thunks';
import './App.scss';
import { Button } from '@mui/material';

function App() {
  const openModal = useSelector((state) => state.modalOpen);
  const dispatch = useDispatch();

  function updatePicture() {
    dispatch(toggleModal(true));
  }

  return (
    <div className="selector-container">
      <h1>Image Gallery</h1>
      <ProfilePicture />
      { openModal ? <ImageSelector /> : <div className="details"><p>Select a new profile picture using Pexels images search by pressing the update button!</p> <Button onClick={updatePicture} variant="contained">Update Picture</Button></div> }
    </div>
  );
}

export default App;
