const UserModel = require('../model/users')
const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers()
        res.json({
            message : 'get Users success!',
            data
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error!',
            serverMsg : error
        })
    }
    
}

const detailUser = async (req,res)=>{
    const {id} = req.params
    try {
        const [data] = await UserModel.detailUser(id)
        res.json({
            message : 'get Detail User success!',
            data
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error!',
            serverMsg : error
        })
    }
}

const createUser = async (req, res) => {
  
    try {
        await UserModel.createUser(req.body)
        res.status(201).json({
            message : `Create User success!`,
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error!',
            serverMsg : error
        })
    }
    
}

const updateuser =  async(req, res) => {
    const {id} = req.params
    try {
        await UserModel.updateuser(req.body, id)
        res.json({
            message : 'Update User success!',
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error!',
            serverMsg : error
        })
    }
    
    
}

const deleteUser = async (req, res) => {
    const {id} = req.params
   
    try {
        await UserModel.deleteUser(id)
        res.json({
            message : 'Delete User success!',
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error!',
            serverMsg : error
        })
    }
    
}

module.exports = {
    getAllUsers, 
    createUser, 
    updateuser, 
    deleteUser,
    detailUser
}