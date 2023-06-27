const express = require('express')
const router = express.Router()

const {getAllUsers, createUser, updateuser, deleteUser, detailUser} = require('../controller/users')

router.get('/', getAllUsers)
router.get('/:id', detailUser)
router.post('/', createUser)
router.patch('/:id', updateuser)
router.delete('/:id', deleteUser)

module.exports = router