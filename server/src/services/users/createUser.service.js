import database from "../../database/database";
import * as bycript from 'bcrypt'

const createUserService = async (user) => {
    const hashedPassword = await bycript.hash(user.senha, 10)
    try {
        const res = await database.query(
            `INSERT INTO usuario
                (nome, sobrenome, email, senha, telefone)
            VALUES
                ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
            [user.nome, user.sobrenome, user.email, hashedPassword, user.telefone]
        )

        return res.rows[0]
        
    } catch (err) {
        console.log(err);
        throw new Error(err)
    }
}

export default createUserService