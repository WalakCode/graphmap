const mysql = require('mysql2/promise');
const pool = require('../config/dbC');

class User {
  constructor(user, pass) {
    this.user = user;
    this.password = pass;
  }     

  static async createUser(getUser, getPass) {
    let connection;

    try {
      const user = new User(getUser, getPass);

      connection = await pool.getConnection();

      const query = `INSERT INTO users SET username = ?, password = ?`;
      const rows = await connection.execute(query, [user.user, user.password]);

      return {success: true, data: user };
    } catch (error) {
      console.error('Error en createUser:', error);
      return {success: false, error: 'Error al obtener usuario' };
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }
}

module.exports = User;
