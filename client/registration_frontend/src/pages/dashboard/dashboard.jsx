import MainContainer from '../../components/mainContainer'
import { useState } from 'react'
import {RiUserAddLine} from 'react-icons/ri'
import HeaderContainer from '../../components/header/header'
import Cards from '../../components/card/card';
import Dash from './style'
import Link from '../../components/link';
import {ModalCreateUser, ModalUpdate, ModalDelete} from '../../components/modal/modal'


const Dashboard = () => {
    const [addUser, setAddUser] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [deleteUser, setDeleteUser] = useState(false)
       
    return(
        <MainContainer>
              {
                addUser? 
                    addUser && (
                        <ModalCreateUser setAddUser={setAddUser}/>
                    )
                :editUser? 
                    editUser && (
                        <ModalUpdate setEditUser={setEditUser}/>
                    )
                : deleteUser?
                    deleteUser && (
                        <ModalDelete setDeleteUser={setDeleteUser}/>
                    )
                : null
            }
            <HeaderContainer prop={'sair'}>
                <Link href="">Editar</Link>
            </HeaderContainer>

            <Dash>
                <h2 className='subtitle'> NOME essa é sua pagina de gestão de contatos</h2>

                <section className='insertUser'>
                    <button 
                    className='btn__add btn__icon'
                    onClick={() => setAddUser(true)}>
                        <RiUserAddLine size={20}/>
                    </button>
                </section>

                <Cards setDeleteUser={setDeleteUser} setEditUser={setEditUser}/>        
            </Dash>
          
        </MainContainer>
    )
}

export default Dashboard