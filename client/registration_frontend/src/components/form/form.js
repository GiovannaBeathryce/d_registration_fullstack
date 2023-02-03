import styled from 'styled-components'

const Form = styled.form`
    display: grid;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 400px;

    grid-template-areas: 
    "nome sobrenome"
    "apelido apelido"
    "email email"
    "senha senha"
    "telefone telefone"
    "btn btn"
    ;

    .item{
        gap: 10px;
    }

    .name{
        grid-area: nome;
    }

    .sobrenome{
        grid-area: sobrenome;
    }
    .apelido{
        grid-area: apelido;
    }
    .email{
        grid-area: email;
    }

    .senha{
        grid-area: senha;
    }
    
    .telefone{
        grid-area: telefone;
    }

    .btn{
        grid-area: btn;
    }
`

export default Form

