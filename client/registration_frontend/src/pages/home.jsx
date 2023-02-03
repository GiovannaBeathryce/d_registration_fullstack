import HeaderContainer from "../components/header/header"
import Form from '../components/form/form';
import InputBox from '../components/form/input';
import BodyTitle from '../components/boryTitle';
import Button from '../components/form/button';
import Link from "../components/link";
import MainContainer from "../components/mainContainer";

const HomePage = () => {
    return(
        <MainContainer>
            <HeaderContainer/>

            <BodyTitle>
            <h4 className='body__t2'>COMECE DE GRAÇA</h4>
            <h1 className='body__t1'>Crie sua conta</h1>  
            <h5 className='body__sub-t'>Já é membro? <Link className='link__login'>Login</Link></h5>
            </BodyTitle>

            <Form action="">
            <InputBox className='item name'>
                <input type="text" required/>
                <span className='label'>Name</span>
                <span className='icon'></span>
            </InputBox>
            <InputBox className='item sobrenome'>
                <input type="text" required/>
                <span className='label'>sobrenome</span>
                <span className='icon'></span>
            </InputBox>
            <InputBox className='item email'>
                <input type="text" required/>
                <span className='label'>email</span>
                <span className='icon'></span>
            </InputBox>
            <InputBox className='item senha'>
                <input type="password" required/>
                <span className='label'>senha</span>
                <span className='icon'></span>
            </InputBox>
            <InputBox className='item telefone'>
                <input type="text" required/>
                <span className='label'>telefone</span>
                <span className='icon'></span>
            </InputBox>
            <Button className='item btn'>Criar conta</Button>
            </Form>            
        </MainContainer>
    )
}

export default HomePage