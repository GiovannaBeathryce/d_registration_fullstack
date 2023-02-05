import database from "../../database/database"

const deleteUserService = async (id) => {
    try {
        const res = await database.query(
            "DELETE FROM usuario WHERE id = $1 RETURNING *",
            [id]
        )
        if(res.rowCount === 0){
            throw new Error("User not found")
        }
        return "User deleted"
        
    } catch (err) {
        throw new Error(err)
    }
}

export default deleteUserService