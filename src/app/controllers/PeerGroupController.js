const mongoose = require('mongoose');
const Peer = require('../models/Peer');
class PeerController {
    async getPeerById(req, res, next) {
        const { id } = req.query;
        const peer = await Peer.find({ id: id}).exec();
        if(peer[0]) return  res.status(200).json(peer);
        return res.status(400).json({});
    }
    async getAllPeer(req, res, next) {
        const peer = await Peer.find({}).exec();
        return  res.status(200).json(peer);
    }
    async createPeer(req, res, next) {
        const { name,member} = req.body;
        await Peer.create({NameReceiver: name, Member: member}).then(result => {
            res.status(201).json({});
        })
        .catch(next);
        return res.status(400).json({});
    }
}
module.exports = new PeerController();