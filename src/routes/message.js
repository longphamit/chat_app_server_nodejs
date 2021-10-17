const express = require('express');
const router = express.Router();

const messageController = require('../app/controllers/MessageController');

router.get('/', messageController.getMessageByIndividual);
router.post('/', messageController.create);
router.get('/get-all', messageController.getAll);

module.exports = router;
