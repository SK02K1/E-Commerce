import { LoginForm } from '../../components';
import SnackbarProvider from 'react-simple-snackbar';

export const Login = () => {
  return (
    <>
      <SnackbarProvider>
        <LoginForm />
      </SnackbarProvider>
    </>
  );
};
