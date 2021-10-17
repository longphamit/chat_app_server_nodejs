const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GroupMessage = new Schema({
  Id: ObjectId,
  GroupId: ObjectId,
  SenderId: ObjectId,
  Content: String,
  CreateDate: { type: Date, default: Date.now },
});
module.exports = new mongoose.model('GroupMessage', GroupMessage);