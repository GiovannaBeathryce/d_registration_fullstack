import Modal from "./style"
import {useForm} from 'react-hook-form'
import {AiFillCloseCircle} from 'react-icons/ai'
import Form from '../form/form'
import InputBox from '../form/input'

import Button from '../form/button'

export const ModalCreateUser = ({setAddUser}) => {
    const {register, handleSubmit, reset} = useForm()

    const CreateUser = (data)=>{
        console.log(data)
        reset()
    }

    const CloseModal = ()=>{
        setAddUser(false)
    }

    return(
        <Modal>         
            <dialog>
                <button 
                className="btn btn__modal" 
                onClick={() => CloseModal()}>
                    <AiFillCloseCircle color="#9cdbf7" size={30}/>
                </button>
                <h1>Dados do contato</h1>
                <Form onSubmit={handleSubmit(CreateUser)}>
                    <InputBox className='item name'>
                        <label htmlFor="name"></label>
                        <input id="name" type="text" required {...register('name')}/>
                        <span className='label'>Name</span>
                    </InputBox>
                    <InputBox className='item sobrenome'>
                        <input id="sobrenome" type="text" required {...register('sobrenome')}/>
                        <span className='label'>sobrenome</span>
                    </InputBox>
                    <InputBox className='item apelido'>
                        <input id="apelido" type="text" required {...register('apelido')}/>
                        <span className='label'>apelido</span>
                    </InputBox>
                    <InputBox className='item cidade'>
                        <input id="cidade" type="text" required {...register('cidade')}/>
                        <span className='label'>cidade</span>
                    </InputBox>
                    <InputBox className='item aniversario'>
                        <input id="aniversario" type="date" required {...register('aniversario')}/>
                        <span className='label'>aniversário</span>
                    </InputBox>
                    <InputBox className='item email'>
                        <input id="email" type="email" required {...register('email')}/>
                        <span className='label'>email</span>
                    </InputBox>
                    <InputBox className='item telefone'>
                        <input id="telefone" type="text" required {...register('telefone')}/>
                        <span className='label'>telefone</span>
                    </InputBox>
                    <Button className='item btn btn__res' >Atualizar</Button>
                </Form>
            </dialog> 
        </Modal>
    )
}

export const ModalUpdate = ({setEditUser}) => {
    const {register, handleSubmit, reset} = useForm()

    const updateUser = (data)=>{
        console.log(data)
        reset()
    }

    const CloseModal = ()=>{
        setEditUser(false)
    }

    return(
        <Modal>         
            <dialog>
                <button 
                className="btn btn__modal" 
                onClick={() => CloseModal()}>
                    <AiFillCloseCircle color="#9cdbf7" size={30}/>
                </button>
                <h1>Para alterar este contato preencha todos os campos,<br/> ou apenas os desejados.</h1>
                <Form onSubmit={handleSubmit(updateUser)}>
                    <InputBox className='item name'>
                    <input id="name" type="text" {...register('name')}/>
                        <span className='label'>Name</span>
                    </InputBox>
                    <InputBox className='item sobrenome'>
                    <input id="sobrenome" type="text" {...register('sobrenome')}/>
                        <span className='label'>sobrenome</span>
                    </InputBox>
                    <InputBox className='item apelido'>
                    <input id="apelido" type="text" {...register('apelido')}/>
                        <span className='label'>apelido</span>
                    </InputBox>
                    <InputBox className='item email'>
                    <input id="email" type="email" {...register('email')}/>
                        <span className='label'>email</span>
                    </InputBox>
                    <InputBox className='item telefone'>
                    <input id="telefone" type="text" {...register('telefone')}/>
                        <span className='label'>telefone</span>
                    </InputBox>
                    <Button className='item btn btn__res'>Atualizar</Button>
                </Form>
            </dialog> 
        </Modal>
    )
}

export const ModalDelete = ({setDeleteUser}) => {
    const CloseModal = ()=>{
        setDeleteUser(false)
    }

    return(
        <Modal>         
                <dialog className="dialog__delete">
                    <button 
                    className="btn btn__modal" 
                    onClick={() => CloseModal()}>
                        <AiFillCloseCircle color="#9cdbf7" size={30}/>
                    </button>
                    <h1>Tem certeza que deja excluir este usuário?</h1>
                    <div className="buttons">
                        <Button 
                        className="btn__res" >
                            Confirmar
                        </Button>
                        <Button
                        className="btn__res" 
                        onClick={() => CloseModal()}>
                            Cancelar
                        </Button>
                    </div>
                </dialog> 
        </Modal>
    )
}
