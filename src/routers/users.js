const express = require('express')
const router = express.Router()

const {getAllUsers, createUser, updateuser, deleteUser} = require('../controller/users')

router.get('/', getAllUsers)
router.post('/', createUser)
router.patch('/:id', updateuser)
router.delete('/:id', deleteUser)

module.exports = router