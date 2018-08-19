const router = require('express').Router()
const {register, getUsers, updateUser, removeUser, signFb, signin} = require('../controllers/user_controller');
const routerTask = require('./task')
const routerW = require('./weather');

router.post('/',register)
      .post('/signin/facebook', signFb)
      .post('/signin',signin)
      .get('/',getUsers)
      .put('/:id',updateUser)
      .delete('/:id',removeUser)
      .use('/task',routerTask)
      .use('/weather',routerW)
module.exports = {router}

