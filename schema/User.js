const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  Id: ObjectId,
  Username: String,
  Password: String,
  Name: String,
  Image: {
    type: String,
    default: ""
  },
});
module.exports = new mongoose.model('User', User);