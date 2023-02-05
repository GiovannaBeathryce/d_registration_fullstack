import database from "../../database/database"

const createContatoService = async (userId, contato) => {
    try {
        const res = await database.query(
            `INSERT INTO contatos
                (nome, sobrenome, apelido, cidade, aniversario, email, telefone, usuario_id)
            VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
            `,
            [contato.nome, contato.sobrenome, contato.apelido, contato.cidade, contato.aniversario, contato.email, contato.telefone, userId]
        )

        return res.rows[0]
        
    } catch (err) {
        throw new Error(err)
    }
}

export default createContatoService