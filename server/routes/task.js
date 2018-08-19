const router = require('express').Router()
const {getTasks, insertTask, updateTask, removeTask, taskDone, reminder, todayTask, doneTask} = require('../controllers/task_controller');

router.get('/:token', getTasks)
      .post('/insert',insertTask)
      .put('/:id',updateTask)
      .delete('/:id',removeTask)
      .put('/done/:id',taskDone)
      .get('/reminder/:token',reminder)
      .get('/todayTasks/:token',todayTask)
      .get('/doneTask/:token',doneTask)

module.exports = router