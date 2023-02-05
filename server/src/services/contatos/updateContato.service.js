import database from "../../database/database"

const updateContatoService = async (id, contato, userId) => {
    try {
        let query = `UPDATE contatos SET `
        const keys = Object.keys(contato)
        const values = Object.values(contato)

        keys.forEach((key, index) => {
            query += `${key} = \$${index+=1}, `
        })

        query = query.slice(0, -2)
        
        query += ` WHERE id=\$${keys.length+=1} AND usuario_id =\$${keys.length+=1} RETURNING *`

        const res = await database.query(
            query,
            [...values, id, userId]
        )

        if(res.rowCount === 0){
            throw new Error("Contact not found")
        }
        
        return res.rows[0]
        // return {}
        
    } catch (err) {
        throw new Error(err)
    }
}

export default updateContatoService