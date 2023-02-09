import styled from 'styled-components'

export const ContainerCards = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    ::-webkit-scrollbar {
    width: 5px;
    }

    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #2c5263; 
    border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
    background: #203a43; 
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background:#baf0ff52;
    ; 
    }
`

export const CardContainer = styled.div`
    width: 80%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    background-color:  #baf0ff52;
    padding: 20px;
    border-radius: 15px;

    font-size: 16px;
    color: #000;

    .dados_do_contato{
        color:#d1d1d4e3;
        text-align: initial;
        width: 80%;
        font-size: 14px;
        font-weight: 300;

        p{
            margin: 2px;
        }
    }
    
`

