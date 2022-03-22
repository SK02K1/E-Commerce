import axios from 'axios';

export const handleLogin = async ({
  saveUserData,
  setFormData,
  navigate,
  from,
  formInitialState,
}) => {
  try {
    const { data, status } = await axios.post('/api/auth/login', {
      email: 'adarshbalika@gmail.com',
      password: 'adarshbalika',
    });
    if (status === 200) {
      saveUserData(data);
      setFormData(formInitialState);
      navigate(from, { replace: true });
    }
  } catch (error) {
    console.error(error);
  }
};
