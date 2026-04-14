import { useSelector } from 'react-redux';

const ProfilePicture = () => {
  const profilePicture = useSelector((state) => state.image);

  if (profilePicture.length === 0) {
    return <div className="image-placeholder"></div>;
  }

  return <img className="image" src={profilePicture.src.medium} alt="Profile" />;
};

export default ProfilePicture;