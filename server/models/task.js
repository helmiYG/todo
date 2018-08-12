var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  task:  String,
  description : String,
  status: {type:Boolean, default: false},
}, {
  timestamps: true,
});

let Task = mongoose.model('Task',taskSchema)
module.exports = Task