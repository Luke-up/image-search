import { useSelector } from 'react-redux';

const ProfilePicture = () => {
    const profilePicture = useSelector((state) => state.image);
    console.log('Profile Picture:', profilePicture);
    if (profilePicture.length === 0) {
        return (
            <div className="imagePlaceholder"></div>
        )
    } else {
        return (
            <img src={profilePicture.src.medium} alt="Profile" />
        );
    };
};

export default ProfilePicture;