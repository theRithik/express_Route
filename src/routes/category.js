
let express = require('express')
let categoryRoute = express.Router()

var details = [
    {
        "title":"from details",
        "name":"rithik",
        "age":21,
        "studying":"full stack",
        "job":"nothing"
    },
    {
        "name":"rithik",
        "age":21,
        "studying":"full stack",
        "job":"nothing"
    },
    {
        "name":"rithik",
        "age":21,
        "studying":"full stack",
        "job":"nothing"
    }
]


categoryRoute.route('/')
    .get((req,res)=>{
        res.send(details)
})
categoryRoute.route('/details')
.get((req,res)=>{
    res.send('it is working')
})

module.exports= categoryRoute
