const Message = require('../models/Message');
const { mongooseObject } = require('../../utils/mongoose');

class MessageController {
    // [GET]
    async getMessageByIndividual(req, res, next) {
       const { senderId, receiverId } = req.query;
       const sender = await Message.find({ SenderId: senderId, ReceiverId: receiverId }).exec();
       const receiver = await Message.find({ SenderId: receiverId, ReceiverId: senderId }).exec();
       return  res.status(200).json({
           sender: sender,
           receiver: receiver
       });
    }
    async getMessageByReceiverId(req, res, next) {
        const { receiverId } = req.query;
        const message = await Message.find({ ReceiverId: receiverId }).exec();
        return  res.status(200).json({
            message: message,
        });
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