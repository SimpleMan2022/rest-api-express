const dbPool = require("../config/database")

const getAllUsers = ()=> {
    const sqlQuery = "SELECT * FROM USERS"
    return dbPool.execute(sqlQuery)
}

// const createUser = ()=> {
//     const sqlQuery = "INSERT INTO USERS(name,email,address) VALUES ('"
// }

module.exports = {getAllUsers}