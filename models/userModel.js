const mysql = require('mysql2/promise');
const dbc = require('../config/dbC')

class User{
    constructor(user,pass){
        this.user = user;
        this.password = pass
    }

    static async createUser(getUser,getPass){
        try{
            const user = new User(getUser,getPass)
            
            const pool = mysql.createPool(dbc);
            const connection = await pool.getConnection();

            const query = `INSERT INTO users SET username = ?, password = ?`
            const[rows,fields] = await connection.execute(query,[user.user,user.password])
            
            connection.release();
            return {success:true,data:rows,fields}
        }catch(error){
            console.error('Error en createUser:', error);
            return {success:false,error:'error al obtener usuario'}
        }
    }
}


module.exports = User;