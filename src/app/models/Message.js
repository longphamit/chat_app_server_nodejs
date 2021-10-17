const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Message = new Schema({
  Id: ObjectId,
  SenderId: ObjectId,
  ReceiverId: ObjectId,
  Content: String,
  CreateDate: { type: Date, default: Date.now },
});
module.exports = new mongoose.model('Message', Message);