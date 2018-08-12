const router = require('express').Router()
const {register, getUsers, updateUser, removeUser, signFb} = require('../controllers/user_controller');
const routerTask = require('./task')
router.post('/signin/facebook', signFb)
      .post('/',register)
      .get('/',getUsers)
      .put('/:id',updateUser)
      .delete('/:id',removeUser)
      .use('/task',routerTask)
      
module.exports = {router}

