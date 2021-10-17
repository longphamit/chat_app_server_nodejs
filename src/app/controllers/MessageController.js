const Message = require('../models/Message');
const { mongooseObject } = require('../../utils/mongoose');

class MessageController {
    // [GET]
    async getMessageByUserId(req, res, next) {
       const { senderId, receiverId } = req.query;
       const user = await Message.find({ SenderId: senderId, ReceiverId: receiverId }).exec();
       return  res.status(200).json(user);
    }
    create(req, res, next) {
        const { senderId, receiverId, content } = req.body;
        Message.create({SenderId: senderId, ReceiverId: receiverId, Content: content}).then(result => {
            res.status(201).json(result);
        })
        .catch(next);
    }
    getAll(req,res,next) {
        Message.find({}).then(messages => res.status(200).json(messages)).catch(next);
    }
}
module.exports = new MessageController();