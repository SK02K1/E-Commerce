import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [encodedToken, setEncodedToken] = useState(
    localStorage.getItem('token')
  );

  const updateEncodedToken = (token) => {
    setEncodedToken(token);
    localStorage.setItem('token', token);
  };

  return (
    <AuthContext.Provider value={{ encodedToken, updateEncodedToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
