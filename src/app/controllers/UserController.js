const User = require('../models/User');
const { mongooseObject } = require('../../utils/mongoose');

class UserController {
    // [GET]
    async getUser(req, res, next) {
       const { username, password } = req.query;
       const user = await User.find({ Username: username, Password: password}).exec();
       if(user[0]) return  res.status(200).json(user);
       return res.status(400).json({});
    }

}
module.exports = new UserController();