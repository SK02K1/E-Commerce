import axios from 'axios';
import toast from 'react-hot-toast';

export const handleLogin = async ({
  e,
  email,
  password,
  saveUserData,
  setFormData,
  navigate,
  from,
  formInitialState,
}) => {
  e.preventDefault();
  try {
    const { data, status } = await axios.post('/api/auth/login', {
      email,
      password,
    });
    if (status === 200) {
      saveUserData(data);
      setFormData(formInitialState);
      navigate(from, { replace: true });
      toast.success('Successfully logged in');
    } else if (status === 201) {
      toast.error('Wrong Credentials');
    }
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      toast.error('User not found');
    }
  }
};

export const handleSignup = async ({
  e,
  formData,
  setFormData,
  navigate,
  formInitialState,
}) => {
  e.preventDefault();
  try {
    const { status } = await axios.post('/api/auth/signup', {
      ...formData,
    });
    if (status === 201) {
      setFormData(formInitialState);
      navigate('/login');
      toast.success('Account created, login now');
    }
  } catch (error) {
    if (error.response.status === 422) {
      toast.error('Account with this email already exists');
    }
  }
};
