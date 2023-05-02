
let express = require('express')
let productRoute = express.Router()



var products = [
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
    },
    {
        "name":"rithik",
        "age":21,
        "studying":"full stack",
        "job":"nothing"
    }
]

productRoute.route('/')
.get((req,res)=>{
    res.send(products)
})

productRoute.route('/products')
.get((req,res)=>{
    res.send('this is from the products')
})


module.exports = productRoute