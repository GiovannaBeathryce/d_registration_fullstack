import styled from "styled-components";

const BodyTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .body__t1{
        font-size: 45px;
        font-weight: 500;
        color: #fff;
          font-family: 'Ubuntu', sans-serif;

    }
    .body__t2{
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 400;
        color: #d1d1d4;

    }
    .body__sub-t{
        margin-top: 5px;
        font-size: 15px;
        font-weight: 300;
        display: flex;
        color: #d1d1d4;

    }
    
    .link__login{
        margin-left: 5px;
        color: #9cdbf7;
        font-weight: 400;
    }

`

export default BodyTitle