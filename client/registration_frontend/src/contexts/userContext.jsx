import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import api from '../services/api';

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [updateUser, setUpdateUser] = useState(false)
    const [deleteUser, setDeleteUser] = useState(false)
    const navigate = useNavigate();
    const {reset} = useForm()

    const CreateUser = async (data) => {
        const res = await api.post('user', data)
        reset()
        navigate('/login', { replace: true });
    }
    
    const ListUserId = async (data) => {
        const id = localStorage.getItem('@AllContacts:id');
        const res = await api.get(`/user/${id}`, data)
    }

    const UpdateUser = async (data) => {
        const id = localStorage.getItem('@AllContacts:id');
        const res = await api.patch(`/user/${id}`, data)
        reset()
        setUpdateUser(false)
    }

    const DeleteUser = async () => {
        const id = localStorage.getItem('@AllContacts:id');
        const res = await api.delete(`/user/${id}`)
        localStorage.clear('@AllContacts:token');
        localStorage.clear('@AllContacts:nome')
        localStorage.clear('@AllContacts:id');
        console.log(res.data)
        setUpdateUser(false)
        setDeleteUser(false)

        navigate('/home');
    }

  return (
    <UserContext.Provider value={{
        ListUserId,
        CreateUser, 
        UpdateUser,
        DeleteUser,
        updateUser, setUpdateUser,
        deleteUser, setDeleteUser
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
