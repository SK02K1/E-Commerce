import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData')) || {}
  );

  const saveUserData = (userData) => {
    setUserData(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const removeUserData = (navigate) => {
    const logoutPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Successfully logged out');
      }, 1200);
    });

    logoutPromise.then(() => {
      navigate('/');
      setUserData({});
      localStorage.removeItem('userData');
    });

    toast.promise(logoutPromise, {
      loading: 'Logging out',
      success: (msg) => msg,
    });
  };

  return (
    <AuthContext.Provider value={{ userData, saveUserData, removeUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
