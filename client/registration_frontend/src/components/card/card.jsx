import {RiUserSettingsLine, RiUserUnfollowLine} from 'react-icons/ri'
import CardContainer from "./style"


const Cards = ({setEditUser, setDeleteUser}) => {
    const updateUser = ()=>{
        setEditUser(true)   
    }

    const removeUser = ()=>{
        setDeleteUser(true)
    }

    return(
        <CardContainer>
                <section>
                    <p>nome</p>
                    <p>Email</p>
                    <p>Endereço</p>
                </section>
                
                <button 
                className="btn__icon btn__modal" 
                onClick={(e) => updateUser()}>
                    <RiUserSettingsLine id='add' size={25}/>
                </button>
                <button 
                className="btn__icon btn__modal" 
                onClick={(e) => removeUser()}>
                    <RiUserUnfollowLine id='delete' size={25}/>
                </button>
                
        </CardContainer>
    )
}

export default Cards