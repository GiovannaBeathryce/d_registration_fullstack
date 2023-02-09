import { useState } from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'
import HeaderContainer from "../../components/header/header"
import Form from '../../components/form/form';
import InputBox from '../../components/form/input';
import BodyTitle from '../../components/boryTitle';
import { ButtonIcon, Div} from "./style";
import Button from '../../components/form/button';
import ARedirect from "../../components/link";
import MainContainer from "../../components/mainContainer";
import {RxEyeClosed, RxEyeOpen} from 'react-icons/rx'

const HomePage = () => {
    const [visible, setVisible] = useState(false)
    const {register, handleSubmit, reset} = useForm()

    const CreateUser = (data) => {
        console.log(data)
        reset()
    }

    return(
        <MainContainer>
            <HeaderContainer>
            <Link to={'/login'}><button className='btn_header'>Entrar</button></Link>
            </HeaderContainer>
            <Div>

                <BodyTitle>
                <h4 className='body__t2'>COMECE DE GRAÇA</h4>
                <h1 className='body__t1'>Crie sua conta</h1>  
                <h5 className='body__sub-t'>Já é membro? <Link to={'/login'}><ARedirect className='link__login'>Login</ARedirect></Link></h5>
                </BodyTitle>

                <Form className='form_home' onSubmit={handleSubmit(CreateUser)}>
                    <InputBox className='item name'>
                        <input id='nome' type="text" required {...register('nome')}/>
                        <span className='label'>Nome</span>
                    </InputBox>
                    <InputBox className='item sobrenome'>
                        <input id='sobrenome' type="text" required {...register('sobrenome')}/>
                        <span className='label'>Sobrenome</span>
                    </InputBox>
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
                    
                    <InputBox className='item telefone'>
                        <input id='telefone' type="text" required {...register('telefone')}/>
                        <span className='label'>Telefone</span>
                    </InputBox>
                    <Button className='item btn'>Criar conta</Button>
                </Form>         
            </Div>
   
        </MainContainer>
    )
}

export default HomePage