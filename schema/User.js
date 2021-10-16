const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  Id: ObjectId,
  Name: String,
  Image: String,
});
module.exports = new mongoose.model('User', User);