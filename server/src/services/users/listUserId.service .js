import database from "../../database/database"

const listUserIdService = async (id) => {
    try {
        const res = await database.query("SELECT * FROM usuario WHERE id = $1", [id])
        if(res.rowCount === 0){
            throw new Error("User not found")
        }
        return res.rows 
    } catch (err) {
        throw new Error(err)
    }
}

export default listUserIdService