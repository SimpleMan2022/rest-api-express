const dbPool = require("../config/database")

const getAllUsers = ()=> {
    const sqlQuery = "SELECT * FROM USERS"
    return dbPool.execute(sqlQuery)
}

const createUser = (body)=> {
    const sqlQuery = `INSERT INTO users (name,email,address) VALUES ('${body.name}','${body.email}', '${body.address}' )`

    return dbPool.execute(sqlQuery)
}

const detailUser = (id)=>{
    const sqlQuery = `SELECT * FROM users WHERE id=${id}`
    return dbPool.execute(sqlQuery)
}

const updateuser = (body, id)=>{
    const sqlQuery = `UPDATE users SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE id=${id}`
    return dbPool.execute(sqlQuery)
}

const deleteUser = (id)=> {
    const sqlQuery = `DELETE FROM users WHERE id=${id}`
    return dbPool.execute(sqlQuery)
}

module.exports = {getAllUsers, createUser,detailUser,updateuser ,deleteUser}