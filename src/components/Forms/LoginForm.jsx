import './Forms.css';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts';
import { handleLogin } from '../../services';

const formInitialState = {
  email: 'adarshbalika@gmail.com',
  password: 'adarshbalika',
  rememberMe: true,
};

export const LoginForm = () => {
  const [formData, setFormData] = useState(formInitialState);
  const { email, password, rememberMe } = formData;
  const { saveUserData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || -1;

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
      <button type='button' className='btn btn-primary m-sm-t' disabled={true}>
        Login
      </button>
      <button
        onClick={() =>
          handleLogin({
            saveUserData,
            setFormData,
            navigate,
            from,
            formInitialState,
          })
        }
        type='button'
        className='btn btn-primary m-sm-tb'
      >
        Login as guest
      </button>
      <Link className='form-link' to='/signup'>
        <span>Create New Account</span>
        <span className='material-icons-outlined'> chevron_right </span>
      </Link>
    </form>
  );
};
