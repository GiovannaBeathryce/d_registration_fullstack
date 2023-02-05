import loginService from "../services/login/login.service"

export const loginController = async (req, res) =>{
    const {email, senha} = req.body
    try {
        const newToken = await loginService(email,senha)
        return res.json(newToken)
        
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}