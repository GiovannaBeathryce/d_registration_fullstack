import { useContext, useEffect} from 'react'
import { ContactContext } from '../../contexts/contactsContext'
import {RiUserSettingsLine, RiUserUnfollowLine} from 'react-icons/ri'
import {ContainerCards ,CardContainer} from "./style"


const Cards = () => {
    const {setContactId, setUpdateContact, setDeleteContact} = useContext(ContactContext);

    const updateUser = ()=>{
        // console.log(id)
        // setContactId(id)
        setUpdateContact(true)   
    }
    
    const removeUser = ()=>{
        // console.log(id)
        // setContactId(id)
        setDeleteContact(true)
    }

    return(
        <ContainerCards>
                    <CardContainer>
                        <section>
                            <p>{}</p>
                            <p>Email</p>
                            <p>Endereço</p>
                        </section>
                        
                        <button 
                        className="btn__icon btn__modal" 
                        onClick={(e) => updateUser(1)}>
                            <RiUserSettingsLine id='add' size={25}/>
                        </button>
                        <button 
                        className="btn__icon btn__modal" 
                        onClick={(e) => removeUser(2)}>
                            <RiUserUnfollowLine id='delete' size={25}/>
                        </button>
                </CardContainer>
        </ContainerCards>
    )
}

export default Cards