import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import api from '../services/api';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {reset} = useForm()


  useEffect(() => {
    async function getUser() {
        const token = localStorage.getItem('@AllContacts:token');
        const id = localStorage.getItem('@AllContacts:id');
    
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get(`/user/${id}`);

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }

    getUser();
  }, []);

    const Login = async (data) => {
        const res = await api.post('/login', data);
        const { user: userData, token } = res.data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        setUser(userData);
        localStorage.setItem('@AllContacts:token', token);
        localStorage.setItem('@AllContacts:id', userData.id);
        
        navigate('/contatos', { replace: true });
    };

    const LogOut = () => {
        localStorage.clear('@AllContacts:token');
        localStorage.clear('@AllContacts:id');

        navigate('/login', { replace: true });

    }

  return (
    <AuthContext.Provider value={{Login, LogOut ,user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
