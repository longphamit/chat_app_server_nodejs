const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Message = new Schema({
  Id: ObjectId,
  SenderId: String,
  SenderName:String,
  ReceiverId: String,
  Content: String,
  CreateDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Message', Message);