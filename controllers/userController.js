const userModel = require('../models/userModel')

class UserController{
    constructor(){

    }

    static async createtUsers(user,pass){
        try{
            const result = await userModel.createUser(user,pass)
            if(result.success){
                console.log(result,"asdaddad")
            }
        }catch(error){
            console.error('Error en createUsers:', error);
        }
    }
}

module.exports = UserController