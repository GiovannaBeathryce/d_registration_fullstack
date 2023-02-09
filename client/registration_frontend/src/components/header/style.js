import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: #d1d1d4;
    
    .btn_header{
        display: flex;
        align-items: center;
        color: #d1d1d4;

        background-color: transparent;
        border: none;
        font-size: 16px;

        text-decoration: none;
        cursor: pointer;

        :hover{
            color: #ffffff;
        }
    }

    .logo__header{
        font-size: 22px;
        font-weight: 700;
        font-family: 'Ubuntu', sans-serif;
    }

    .svg__link{
        margin-right: 4px;
    }
`

export default Header