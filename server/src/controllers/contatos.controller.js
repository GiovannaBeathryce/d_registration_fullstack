import createContatoService from '../services/contatos/createContato.service'
import listContatoService from '../services/contatos/listContato.service'
import updateContatoService from '../services/contatos/updateContato.service'
import deleteContatoService from '../services/contatos/deleteContato.service'

export const createContatoController = async (req, res) => {
    let userId = parseInt(req.user.id)
    const contato = req.body
    try {
        const newContac = await createContatoService(userId, contato)
        return res.status(201).json(newContac)        
    } catch (err) {
        return res.status(400).json(err.message)
    }
}


export const listContatoController = async (req, res) => {
    let id = parseInt(req.user.id)
    try {
        const contatos = await listContatoService(id)    
        return res.json(contatos)  
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message)
    }
}


export const updateContatoController = async (req, res) => {
    let userId = parseInt(req.user.id)
    const id = req.params.id
    const contato = req.body
    try {
        const updatedContact = await updateContatoService(id, contato, userId)
        
        return res.json(updatedContact)
        
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}


export const deleteContatoController = async (req, res) => {
    const id = req.params.id
    let userId = parseInt(req.user.id)

    try {
        const contactDeleted =  await deleteContatoService(id, userId)
        return res.status(204).json(contactDeleted)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}
