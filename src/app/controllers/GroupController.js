const mongoose = require('mongoose');
const Group = require('../models/Group');
class GroupController {
    async getGroupById(req, res, next) {
        const { id } = req.query;
        const group = await Group.find({ id: id}).exec();
        if(group[0]) return  res.status(200).json(group);
        return res.status(400).json({});
    }
    async getAllGroup(req, res, next) {
        const group = await Group.find({}).exec();
        return  res.status(200).json(group);
    }
    async createGroup(req, res, next) {
        const { name,member} = req.body;
        await Group.create({Name: name, Member: member}).then(result => {
            res.status(201).json({result});
        })
        .catch(next);
        return res.status(400).json({});
    }
}
module.exports = new GroupController();