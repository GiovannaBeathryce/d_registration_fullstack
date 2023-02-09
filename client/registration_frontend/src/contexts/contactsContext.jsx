import { createContext, useState } from 'react';
import {useForm} from 'react-hook-form'
import api from '../services/api';

export const ContactContext = createContext({});

const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([])
    const [contactId, setContactId] = ('')
    const [addContact, setAddContact] = useState(false)
    const [updateContact, setUpdateContact] = useState(false)
    const [deleteContact, setDeleteContact] = useState(false)
    const {reset} = useForm()

    const ListContacts = async ()=>{
        const res = await api.get('/contatos')
        setContacts(res.data)
        console.log(contacts)
    }

    
    const ContactCreate = async (data)=>{
        console.log(data)
        const res = await api.post(`contatos`, data)
        setContacts([...contacts,res.data])
        reset()
        setAddContact(false)
    }


    const ContactUpdate = (data, contactId)=>{
        console.log(data)
        const res = api.patch(`contatos/${contactId}`)
        console.log(res.data)
        reset()
        setUpdateContact(false)
    }


    const ContactDelete = (contactId)=>{
        console.log(contactId)
        const res = api.delete(`contatos/${contactId}`)
        console.log(res)
        setDeleteContact(false)
    }


  return (
    <ContactContext.Provider value={{
        ContactCreate,
        ListContacts,
        ContactUpdate,
        ContactDelete,
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
