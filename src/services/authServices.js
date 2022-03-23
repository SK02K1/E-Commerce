import axios from 'axios';

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
    } else if (status === 201) {
      alert('Wrong Credentials');
    }
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      alert('User not found');
    }
  }
};
