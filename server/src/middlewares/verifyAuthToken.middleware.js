import  jwt, { decode }  from "jsonwebtoken"

const verifyAuthTokenMiddleware = (req, res, next) => {
    let token = req.headers.authorization

    if(!token){
        return res
        .status(403)
        .json({message: 'Missing Authorization Token.'})
    }

    token = token?.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY , (err, decoded) => {
        if(err){
            return res
            .status(401)
            .json({message: "Invalid Token."})
        }

        req.user = {
            id: decoded.sub
        }

       next()
    })
}

export default verifyAuthTokenMiddleware