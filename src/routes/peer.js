const express = require('express');
const router = express.Router();

const peerController = require('../app/controllers/PeerGroupController');

router.get('/', peerController.getPeerById);
router.post('/', peerController.createPeer);
router.get('/get-all', peerController.getAllPeer);

module.exports = router;
