import { useReducer } from 'react';
import authContext from './authContext';

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(() => {}, {
    isAuthenticated: false,
    loading: false,
    user: {},
    error: null,
  });

  return (
    <authContext.Provider value={[state, dispatch]}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
