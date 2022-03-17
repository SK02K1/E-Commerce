import './Forms.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { testCredential } from '../../utils';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

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

  const handleTestCredential = () => setFormData(testCredential);

  return (
    <form className='form'>
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
        value={formData.email}
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
        value={formData.password}
        placeholder='Enter your password'
        required
      />
      <label className='m-sm-t' htmlFor='remember-me'>
        <input
          onChange={handleToggle}
          type='checkbox'
          name='rememberMe'
          id='remember-me'
          checked={formData.rememberMe}
        />
        <span className='text-sm m-xs-l'>Remember me</span>
      </label>
      <button type='submit' className='btn btn-primary m-sm-t'>
        Login
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
