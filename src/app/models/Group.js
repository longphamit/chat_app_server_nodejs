const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Group = new Schema({
  Id: ObjectId,
  Member: [],
  Name:String
});
module.exports = new mongoose.model('Group', Group);