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
    create(req, res, next) {
        const { username, password, name } = req.body;
        User.create({Username: username, Password: password, Name: name}).then(result => {
            res.status(201).json(result);
        })
        .catch(next);
    }
    getAll(req,res,next) {
        User.find({}).then(users => res.status(200).json(users)).catch(next);
    }
}
module.exports = new UserController();