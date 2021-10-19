const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Peer = new Schema({
  Id: ObjectId,
  Member: {type: [], max: 2},
  NameReceiver: {type: [], max:2},
});
module.exports = mongoose.model('Peer', Peer);