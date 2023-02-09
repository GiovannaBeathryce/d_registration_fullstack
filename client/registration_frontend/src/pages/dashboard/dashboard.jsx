import MainContainer from '../../components/mainContainer'
import { useState, useContext, useEffect} from 'react'
import { AuthContext } from '../../contexts/authContext'
import { ContactContext } from '../../contexts/contactsContext'
import {RiUserAddLine} from 'react-icons/ri'
import HeaderContainer from '../../components/header/header'
import Cards from '../../components/card/card';
import Dash from './style'
import {ModalCreateContact, ModalUpdateContact, ModalDeleteContact, ModalUpdateUser} from '../../components/modal/modal'


const Dashboard = () => {
    const { LogOut, user } = useContext(AuthContext);
    const {ListContacts, contacts } = useContext(ContactContext);

    const [addContact, setAddContact] = useState(false)
    const [updateContact, setUpdateContact] = useState(false)
    const [deleteContact, setDeleteContact] = useState(false)
    const [updateUser, setUpdateUser] = useState(false)

    useEffect(()=>{
        console.log(user)
        console.log(contacts)
    },[user, contacts])

    return(
        <MainContainer>
           
            <HeaderContainer prop={'sair'}>
                <button className='btn_header' onClick={() => setUpdateUser(true)}>Editar</button>
                <button className='btn_header' onClick={LogOut}>Sair</button>
            </HeaderContainer>

            <Dash>
                <h2 className='subtitle'> {user.nome} essa é sua pagina de gestão de contatos</h2>

                <section className='insertUser'>
                    <button 
                    className='btn__add btn__icon'
                    onClick={() => setAddContact(true)}>
                        <RiUserAddLine size={20}/>
                    </button>
                </section>

                <Cards setDeleteContact={setDeleteContact} setUpdateContact={setUpdateContact}/>        
            </Dash>
          
            {
                updateUser? 
                    updateUser && (
                        <ModalUpdateUser setUpdateUser={setUpdateUser}/>
                    )
                :addContact? 
                    addContact && (
                        <ModalCreateContact />
                    )
                :updateContact? 
                    updateContact && (
                        <ModalUpdateContact setUpdateContact={setUpdateContact}/>
                    )
                : deleteContact?
                    deleteContact && (
                        <ModalDeleteContact setDeleteContact={setDeleteContact}/>
                    )
                : null
            }
        </MainContainer>
    )
}

export default Dashboard