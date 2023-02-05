import database from "../../database/database"

const deleteContatoService = async (id, userId) => {
    try {
        const res = await database.query(
            "DELETE FROM contatos WHERE id = $1 AND usuario_id = $2 RETURNING *",
            [id, userId]
        )
        if(res.rowCount === 0){
            throw new Error("User not found")
        }
        return "Contact deleted"
        
    } catch (err) {
        throw new Error(err)
    }
}

export default deleteContatoService