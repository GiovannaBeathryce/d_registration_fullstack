import database from "../../database/database"
import { compare } from "bcrypt"
import jwt  from "jsonwebtoken"

const loginService = async (email, senha) => {
    try{
        const res = await database.query("SELECT * FROM usuario WHERE email = $1", [email])

        if(res.rows.length === 0){
            throw new Error('Invalid email or password')
        }

        const user = res.rows[0]

        const passwordMatch = await compare(senha, user.senha)
    
        if(!passwordMatch){
            throw new Error('Invalid email or password')
        }

        const token = jwt.sign({
            email: user.email
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "12h",
            subject: user.id
        })

        return {token}
    }
    catch(err){
        throw new Error(err)
    }
}

export default loginService