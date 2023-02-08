import createUserService from '../services/users/createUser.service'
import listUserService from '../services/users/listUser.service'
import listUserIdService from '../services/users/listUserId.service'
import deleteUserService from '../services/users/deleteUser.service'
import updateUserService from '../services/users/updateUser.service'

export const createUserController = async (req, res) => {
    const user = req.body
    try {
        const createdUser = await createUserService(user)
        return res.status(201).json(createdUser)
        
    } catch (err) {
        return res.status(400).json(err.message)
    }
}


export const listUserController = async (req, res) => {
    try {
        const users = await listUserService()
        return res.status(200).json(users)
        
    } catch (err) {
        return res.status(400).json(err.message)
    }
}
export const listUserIdController = async (req, res) => {
    const id = req.params.id
    try {
        const users = await listUserIdService(id)
        return res.status(200).json(users)
        
    } catch (err) {
        return res.status(400).json(err.message)
    }
}


export const updateUserController = async (req, res) => {
    try {
        const id = req.params.id
        const user = req.body

        const updatedUser = await updateUserService(id, user)

        return res.json(updatedUser)
        
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}


export const deleteUserController = async(req, res) => {
    const id = req.params.id
    try {
        const userDeleted = await deleteUserService(id)
        return res.status(204).json(userDeleted)
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

