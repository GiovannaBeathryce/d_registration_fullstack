import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'
import {RxEyeClosed, RxEyeOpen} from 'react-icons/rx'
import HeaderContainer from "../../components/header/header"
import Form from '../../components/form/form';
import InputBox from '../../components/form/input';
import BodyTitle from '../../components/boryTitle';
import Body from "./style";
import Button from '../../components/form/button';
import ARedirect from '../../components/link'
import {ButtonIcon} from "../home/style";
import MainContainer from "../../components/mainContainer";

const LoginPage = () => {
    const [visible, setVisible] = useState(false)
    const {register, handleSubmit} = useForm()
    const { Login } = useContext(AuthContext);

    return(
        <MainContainer>
            <HeaderContainer/>

            <Body>
                <BodyTitle className="title">
                    <h1 className='body__t1'>Login</h1>  
                    <h5 className='body__sub-t'>Ainda não é membro? <Link to={'/home'}><ARedirect className='link__login'>Cadastre-se</ARedirect></Link></h5>
                </BodyTitle>

                <Form className="login__form" onSubmit={handleSubmit(Login)}>
                    <InputBox className='item email'>
                        <input id='email' type="email" required {...register('email')}/>
                        <span className='label'>Email</span>
                    </InputBox>
                    {
                        visible?
                            <InputBox className='item senha'>
                                <input id='senha' type="text" required {...register('senha')}/>
                                <span className='label'>Senha</span>
                                <span className='icon'>
                                    <ButtonIcon onClick={() => setVisible(false)} className="btn__icon"><RxEyeClosed /></ButtonIcon>
                                </span>
                            </InputBox>
                        :
                            <InputBox className='item senha'>
                                <input id='senha' type="password" required {...register('senha')}/>
                                <span className='label'>Senha</span>
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