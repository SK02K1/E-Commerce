import './ProfileCard.css';
import { useAuth } from '../../contexts';
import { useNavigate } from 'react-router-dom';

export const ProfileCard = () => {
  const { userData, removeUserData } = useAuth();
  const { firstName, lastName, email } = userData.foundUser;
  const navigate = useNavigate();

  return (
    <div className='profile-card'>
      <span className='material-icons-outlined profile-icon'>
        account_circle
      </span>
      <h2 className='text-base m-xs-t'>
        <span>{firstName} </span>
        <span>{lastName}</span>
      </h2>
      <p className='m-xs-t'>{email}</p>
      <button
        onClick={() => removeUserData(navigate)}
        className='btn btn-danger'
      >
        Logout
      </button>
    </div>
  );
};
