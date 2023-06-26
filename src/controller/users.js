const getAllUsers = (req, res) => {
    res.json({
        message : 'get Users succes!'
    })
}

const createUser = (req, res) => {
    res.json({
        message : 'Create User succes!'
    })
}

module.exports = {getAllUsers, createUser}