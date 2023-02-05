import database from "../../database/database"

const updateUserService = async (id, user) => {
    try {
        let query = `UPDATE usuario SET `
        const keys = Object.keys(user)
        const values = Object.values(user)

        keys.forEach((key, index) => {
            query += `${key} = \$${index+=1}, `
        })

        query = query.slice(0, -2)
        
        query += ` WHERE id=\$${keys.length+=1} RETURNING *`

        const res = await database.query(
            query,
            [...values, id]
        )

        if(res.rowCount === 0){
            throw new Error("User not found")
        }
        
        return res.rows[0]
        
    } catch (err) {
        throw new Error(err)
    }

}

export default updateUserService