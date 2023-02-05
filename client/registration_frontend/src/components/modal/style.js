import styled from 'styled-components'

const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    background-color:#baf0ffd4;

    h1{
        font-size: 22px;
        font-weight: 500;
        color: #d1d1d4;
        margin-bottom: 20px;
    }

    .buttons{
        width: 80%;
        display: flex;
        margin-top: 25px;
        justify-content: center;
        align-items: flex-end;
    }

    .btn{
        border: none;
        background-color: transparent;
        cursor: pointer     
    }

    .btn__res{
        background-color: #9cdbf7;
        color: #213b44;
        font-weight: 500;

        &:hover{
            background-color: #2c5263;
            color: #9cdbf7;
        }
    }

    .dialog__delete{
        width: 50%;
        height: 50%;

    }
        
    dialog{
        position: relative;
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 15px;
        border-radius: 25px;
        border: none;
        background: linear-gradient(to top left,#2c5364, #203a43, #0f2027);
        
        .btn__modal{
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
`

export default Modal