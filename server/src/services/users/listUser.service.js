import database from "../../database/database"

const listUserService = async () => {
    try {
        const res = await database.query("SELECT * FROM usuario")
        return res.rows 
    } catch (err) {
        throw new Error(err)
    }
}

export default listUserService