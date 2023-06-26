const UserModel = require('../model/users')
const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers()
        console.log(data)
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

const createUser = (req, res) => {
    console.log(req.body)
    res.json({
        message : `Create User success!`,
        data : req.body
    })
}

const updateuser = (req, res) => {
    const {id} = req.params
    res.json({
        message : 'Update User success!',
        data : req.body

    })
}

const deleteUser = (req, res) => {
    const {id} = req.params
    res.json({
        message : 'Delete User success!',
        data : {
            id,
            name: 'adit',
            email : 'aditn@gmail.com',
            nohp : '081234567899'
        }
    })
}

module.exports = {
    getAllUsers, 
    createUser, 
    updateuser, 
    deleteUser
}