const express = require("express");
const user = express.Router();
const controller = require('../controllers/userController');

user.get('/', controller.getUsers);
user.post('/', controller.createUser);
user.delete('/:id', controller.deleteUser);

module.exports=user;