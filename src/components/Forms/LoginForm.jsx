import './Forms.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { testCredential } from '../../utils';
import { ClipLoader } from 'react-spinners';
import { useSnackbar } from 'react-simple-snackbar';
import { useAuth } from '../../contexts';

const formInitialState = {
  email: '',
  password: '',
  rememberMe: false,
};

export const LoginForm = () => {
  const [formData, setFormData] = useState(formInitialState);
  const [isLoggingIn, setIsLogginIn] = useState(false);
  const [openSnackbar] = useSnackbar();
  const { updateEncodedToken } = useAuth();
  const { email, password, rememberMe } = formData;
  const navigate = useNavigate();

  const handleInput = (e) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));

  const handleToggle = (e) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.checked,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogginIn(true);
    try {
      const {
        data: { encodedToken },
        status,
      } = await axios.post('/api/auth/login', {
        email,
        password,
      });
      if (status === 200) {
        updateEncodedToken(encodedToken);
        setFormData(formInitialState);
        navigate('/');
      }
    } catch (error) {
      openSnackbar('User not found');
    } finally {
      setIsLogginIn(false);
    }
  };

  const handleTestCredential = () =>
    setFormData({ ...testCredential, rememberMe: true });

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h1 className='text-xl text-center m-xs-tb'>Login</h1>
      <label className='m-sm-t' htmlFor='email'>
        Email address
      </label>
      <input
        onChange={handleInput}
        className='input m-xs-t'
        type='email'
        name='email'
        id='email'
        value={email}
        placeholder='Enter your email'
        required
      />
      <label className='m-sm-t' htmlFor='password'>
        Password
      </label>
      <input
        onChange={handleInput}
        className='input m-xs-t'
        type='password'
        name='password'
        id='password'
        value={password}
        placeholder='Enter your password'
        required
      />
      <label className='m-sm-t' htmlFor='remember-me'>
        <input
          onChange={handleToggle}
          type='checkbox'
          name='rememberMe'
          id='remember-me'
          checked={rememberMe}
        />
        <span className='text-sm m-xs-l'>Remember me</span>
      </label>
      <button type='submit' className='btn btn-primary m-sm-t'>
        {isLoggingIn ? (
          <ClipLoader color='#fff' size={15} speedMultiplier={2} />
        ) : (
          'Login'
        )}
      </button>
      <button
        onClick={handleTestCredential}
        type='button'
        className='btn btn-primary m-sm-tb'
      >
        Use Test Credentials
      </button>
      <Link className='form-link' to='/signup'>
        <span>Create New Account</span>
        <span className='material-icons-outlined'> chevron_right </span>
      </Link>
    </form>
  );
};
