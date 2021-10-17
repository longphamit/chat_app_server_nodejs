const User = require('../models/User');
const { mongooseObject } = require('../../utils/mongoose');

class UserController {
    // [GET]
    getUser(req, res, next) {
        return res.status(200).json({
            id: "123456",
            name: "vinh",
            img: "https://google.com"
          });
    }

}
module.exports = new UserController();