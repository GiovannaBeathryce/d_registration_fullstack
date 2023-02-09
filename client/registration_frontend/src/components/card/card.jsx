import { useContext, useEffect} from 'react'
import { ContactContext } from '../../contexts/contactsContext'
import {RiUserSettingsLine, RiUserUnfollowLine} from 'react-icons/ri'
import {ContainerCards ,CardContainer} from "./style"

const Cards = () => {
    const {ListContacts ,contacts ,setContactId, setUpdateContact, setDeleteContact, loading} = useContext(ContactContext);

    useEffect(()=>{
        ListContacts()
    },[])
    
    const updateUser = (id)=>{
        setContactId(id)
        setUpdateContact(true)   
    }
    
    const removeUser = (id)=>{
        setContactId(id)
        setDeleteContact(true)
    }

    if (loading) {
        return <div>Carregando...</div>
    }
    return (
        <ContainerCards>
            {
                contacts.map((contact)=>(
                    <CardContainer key={contact.id}>
                        <section className='dados_do_contato'>
                            <p>{`Nome: ${contact.nome} ${contact.sobrenome}`}</p>
                            <p>{`Telefone:  ${contact.telefone}`}</p>
                            <p>{`Email: ${contact.email}`}</p>
                        </section>
                        
                        <button 
                        className="btn__icon btn__modal" 
                        onClick={(e) => updateUser(contact.id)}>
                            <RiUserSettingsLine id='add' size={25}/>
                        </button>
                        <button 
                        className="btn__icon btn__modal" 
                        onClick={(e) => removeUser(contact.id)}>
                            <RiUserUnfollowLine id='delete' size={25}/>
                        </button>
                    </CardContainer>
                ))
            }                
        </ContainerCards>
    )
}

export default Cards