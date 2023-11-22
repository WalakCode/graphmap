const UserModel = require('../models/userModel');

class UserController {
    constructor() {

    }

    static async createUsers(user, pass) {
        if (user && pass) {
            const result = await UserModel.createUser(user, pass);
            if (result.success) {
                return { validation: true, data: result.data };
            } else {
                return { validation: false};
            }
        } else {
            return { error: 'Ingrese credenciales válidas' };
        }
    }
}

module.exports = UserController;
