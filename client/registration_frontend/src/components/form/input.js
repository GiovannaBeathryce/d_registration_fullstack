import styled from 'styled-components'

const InputBox = styled.div`
    position: relative;
    margin: 8px;
    
    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(0.8) brightness(50%) sepia(100%) saturate(10000%) hue-rotate(185deg);
    }
    input[type="date"]{
        color: #203a43;
        
        &:focus{
            color: #eef6f27d;
        }
    }
    
    input{
        width: 100%;
        padding: 10px 0;
        border: 1px solid #eef6f230;
        border-radius: 15px;
        background-color: #203a43;
        outline: none;
        color: #fff;
        font-size: 14px;
        font-weight: 100;
        transition: 0.3ms;
        text-align: center;
        
        &:focus{
            border: 1px solid #9cdbf7;

        }
        
        &:focus ~ .label{
            color: #9cdbf7;
            transform: translateX(10px) translateY(-7px);
            font-size: 12px;
            padding: 0 10px;
            background-color: #203a43;
            letter-spacing: 1px;
        }
    }


    .label{
        position: absolute;
        left: 0;
        padding: 10px;
        pointer-events: none;
        font-size: 16px;
        font-weight: 200;
        color: #eef6f27d;
        text-transform: uppercase;
        transition: 0.3s;

    }

`

export default InputBox