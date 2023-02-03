import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: #d1d1d4;


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