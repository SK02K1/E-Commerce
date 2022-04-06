import { ProfileCard } from '../../components';
import { useDocumentTitle } from '../../hooks';

export const Profile = () => {
  useDocumentTitle('Profile');
  return (
    <div>
      <h1 className='text-lg text-center m-lg-tb'>My Profile</h1>
      <ProfileCard />
    </div>
  );
};
