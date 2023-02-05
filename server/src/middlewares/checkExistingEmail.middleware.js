import database from "../database/database";

const checkExistingEmailMiddleware = (req, res, next) => {
    const {email} = req.body

    const emailExisting = database.find(user => user.email === email)

    if(emailExisting){
        return res.status(400).json({ message: 'This email adress is already being used'})
    }

    next()
}

export default checkExistingEmailMiddleware