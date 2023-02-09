import { createContext, useState, useEffect} from 'react';
import {useForm} from 'react-hook-form'
import api from '../services/api';

export const ContactContext = createContext({});

const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([])
    const [contactId, setContactId] = useState('')
    const [addContact, setAddContact] = useState(false)
    const [updateContact, setUpdateContact] = useState(false)
    const [deleteContact, setDeleteContact] = useState(false)
    const [loading, setLoading] = useState(true);

    const {reset} = useForm()
   
    const ListContacts = async ()=>{
      const token = localStorage.getItem('@AllContacts:token');
    
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get('/contatos')

          setContacts(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
     
    const ContactCreate = async (data)=>{
        const res = await api.post(`contatos`, data)
        setContacts([...contacts,res.data])
        reset()
        setAddContact(false)
    }


    const ContactUpdate = async (data, contactId)=>{
        const res = await api.patch(`contatos/${contactId}`, data)
        ListContacts()
        reset()
        setUpdateContact(false)
    }


    const ContactDelete = async (contactId)=>{
        const res = await api.delete(`contatos/${contactId}`)
        setDeleteContact(false)
    }


  return (
    <ContactContext.Provider value={{
        ContactCreate,
        ListContacts,
        ContactUpdate,
        ContactDelete,
        contacts,
        contactId, setContactId,
        addContact, setAddContact,
        updateContact, setUpdateContact,
        deleteContact, setDeleteContact,
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
