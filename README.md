# todo
## challenge portofolio phase 2

list routes of User : 

Route | HTTP | Decription
------|------|-----------
_/_ | POST | register new user
_/signin/facebook_ | POST | signin through facebook
_/signin/_ | POST | sign in manualy
_/_ | GET | get all user
_/:id_ | PUT | update data user 
_/:id_ | DELETE | delete data user

list routes of Tasks : 

Route | HTTP | Decription
------|------|-----------
_/task/:token_ | GET | get uncompletetask
_/task/insertTask_ | POST | create a new task 
_/task/:id_ | PUT | update data task
_/task/:id_ | DELETE | delete data task 
_/task/done/:id_ | PUT | update task as done/complete
_/task/reminder/:token_ | GET | cek reminder
_/task/todayTasks/:token_ | POST | get today tasks
_/task/donetask/_ | POST | get completed tasks 

list routes of Weather : 

Route | HTTP | Decription
------|------|-----------
_/weather/:token_ | GET | Get weather of the day

## usage
``` 
npm install
nodemon app.js

