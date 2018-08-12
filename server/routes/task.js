const router = require('express').Router()
const {getTasks, insertTask, updateTask, removeTask} = require('../controllers/task_controller');

router.get('/', getTasks)
      .post('/',insertTask)
      .put('/:id',updateTask)
      .delete('/:id',removeTask)

module.exports = router