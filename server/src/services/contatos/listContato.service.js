import database from "../../database/database"

const listContatoService = async (id) => {
    try {
        const res = await database.query("SELECT * FROM contatos WHERE usuario_id = $1", [id]);
        return res.rows 
    } catch (err) {
        throw new Error(err)
    }
}


export default listContatoService