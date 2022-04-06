import { SignupForm } from '../../components';
import { useDocumentTitle } from '../../hooks';

export const Signup = () => {
  useDocumentTitle('Signup');
  return (
    <>
      <SignupForm />
    </>
  );
};
