const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/', userController.getUser);
router.post('/', userController.create);
router.get('/get-all', userController.getAll);

module.exports = router;
