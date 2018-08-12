const Task = require('../models/task')

module.exports = {
    getTasks: (req, res) => {
        Task.find()
            .then(tasks => {
                res.status(200).json({
                    tasks
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: err.message,
                })
            })
    },

    insertTask: (req, res) => {
        let task = req.body
        Task.create(task)
            .then((newTask) => {
                res.status(201).json({
                    msg: 'task created',
                    newTask
                })
            })
            .catch((err) => {
                res.status(500).json({
                    msg: err.message,
                })
            });
    },

    updateTask: (req, res) => {
        const { task, description } = req.body
        Task.findOne({ _id: req.params.id })
            .then((result) => {
                if(result){
                    Task.updateOne({ _id: req.params.id }, { $set: { task: task || result.task, description: description || result.description }})
                        .then(() => {
                            res.status(201).json({
                                msg: 'task updated',
                            })
                        })
                        .catch((err) => {
                            res.status(500).json({
                                msg: err.message,
                            })
                        });
                }else{
                    
                    res.status(404).json({
                        msg: 'data not found'
                    })
                }
            })
            .catch((err) => {
                res.status(500).json({
                    msg: err.message,
                })
            });

    },

    removeTask: (req, res) => {
       Task.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.status(200).json({
                    msg: 'data deleted'
                })
            })
            .catch((err) => {
                res.status(500).json({
                    msg: err.message,
                })
            });
    }
}