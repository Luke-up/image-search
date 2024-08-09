import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageSelector from './ImageSelector';
import ProfilePicture from './ProfilePicture';
import { toggleModal } from './thunks';

function App() {
  const openModal = useSelector((state) => state.modalOpen);
  const dispatch = useDispatch();

  function updatePicture() {
    dispatch(toggleModal(true));
  }

  return (
    <div>
      <h1>Image Gallery</h1>
      <ProfilePicture />
      { openModal ? <ImageSelector /> : <button onClick={updatePicture}>Update Picture</button> }
      
    </div>
  );
}

export default App;
