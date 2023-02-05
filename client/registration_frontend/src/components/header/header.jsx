import Header from "./style";
import Link from "../link";
import {BsFillPersonLinesFill} from 'react-icons/bs'

const HeaderContainer = ({prop, children}) => {
    return(
        <Header>
            <Link className='logo__header'><BsFillPersonLinesFill size={25} className='svg__link' />AllContacts</Link>
            {children}
            {
                prop == 'sair'?
                    <Link>Sair</Link>
                    : prop == 'entrar'?
                    <Link>Entrar</Link>
                    : null
            }
            
        </Header>
    )
}

export default HeaderContainer