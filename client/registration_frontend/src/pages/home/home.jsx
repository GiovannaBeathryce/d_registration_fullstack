import { useState } from "react";
import HeaderContainer from "../../components/header/header"
import Form from '../../components/form/form';
import InputBox from '../../components/form/input';
import BodyTitle from '../../components/boryTitle';
import { ButtonIcon, Div} from "./style";
import Button from '../../components/form/button';
import Link from "../../components/link";
import MainContainer from "../../components/mainContainer";
import {RxEyeClosed, RxEyeOpen} from 'react-icons/rx'

const HomePage = () => {
    const [visible, setVisible] = useState(false)

    return(
        <MainContainer>
            <HeaderContainer/>
            <Div>

            <BodyTitle>
            <h4 className='body__t2'>COMECE DE GRAÇA</h4>
            <h1 className='body__t1'>Crie sua conta</h1>  
            <h5 className='body__sub-t'>Já é membro? <Link className='link__login'>Login</Link></h5>
            </BodyTitle>

            <Form action="">
            <InputBox className='item name'>
                <input type="text" required/>
                <span className='label'>Name</span>
            </InputBox>
            <InputBox className='item sobrenome'>
                <input type="text" required/>
                <span className='label'>sobrenome</span>
            </InputBox>
            <InputBox className='item email'>
                <input type="email" required/>
                <span className='label'>email</span>
            </InputBox>
            {
                visible?
                <InputBox className='item senha'>
                        <input type="text" required/>
                        <span className='label'>senha</span>
                        <span className='icon'>
                            <ButtonIcon onClick={() => setVisible(false)} className="btn__icon"><RxEyeClosed /></ButtonIcon>
                        </span>
                    </InputBox>
                :
                <InputBox className='item senha'>
                        <input type="password" required/>
                        <span className='label'>senha</span>
                        <span className='icon'>
                            <ButtonIcon onClick={() => setVisible(true)} className="btn__icon"><RxEyeOpen /></ButtonIcon>
                        </span>
                    </InputBox>
            }
            
            <InputBox className='item telefone'>
                <input type="text" required/>
                <span className='label'>telefone</span>
            </InputBox>
            <Button className='item btn'>Criar conta</Button>
            </Form>         
            </Div>
   
        </MainContainer>
    )
}

export default HomePage