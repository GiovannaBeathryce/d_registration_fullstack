import { useState } from "react";
import {RxEyeClosed, RxEyeOpen} from 'react-icons/rx'
import HeaderContainer from "../../components/header/header"
import Form from '../../components/form/form';
import InputBox from '../../components/form/input';
import BodyTitle from '../../components/boryTitle';
import Body from "./style";
import Button from '../../components/form/button';
import {ButtonIcon} from "../home/style";
import MainContainer from "../../components/mainContainer";

const LoginPage = () => {
    const [visible, setVisible] = useState(false)

    return(
        <MainContainer>
            <HeaderContainer/>

            <Body>
                <BodyTitle className="title">
                    <h1 className='body__t1'>Login</h1>  
                </BodyTitle>

                <Form className="login__form">
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
                    <Button className='item btn'>Entrar</Button>
                </Form>            
            </Body>
        </MainContainer>
    )
}

export default LoginPage