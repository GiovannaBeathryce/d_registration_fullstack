import Header from "./style";
import Link from "../link";
import {BsFillPersonLinesFill} from 'react-icons/bs'

const HeaderContainer = ({prop, children}) => {
    return(
        <Header>
            <Link className='logo__header'><BsFillPersonLinesFill size={25} className='svg__link' />AllContacts</Link>
            {children}
            
        </Header>
    )
}

export default HeaderContainer