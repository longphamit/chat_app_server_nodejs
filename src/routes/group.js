const express = require('express');
const router = express.Router();

const groupController = require('../app/controllers/GroupController');

router.get('/get-all', groupController.getAllGroup);
router.get('/', groupController.getGroupById);
router.post('/', groupController.createGroup);
router.get('/by_ref', groupController.getGroupByRefId);

module.exports = router;
