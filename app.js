let express = require('express')
let app = express()
let categoryRoute = require('./src/routes/category')
let productRoute = require('./src/routes/products')
let port= process.env.PORT||5000



app.get('/',(req,res)=>{
    res.send('this is node app')
})




app.use('/category', categoryRoute)
app.use('/product', productRoute)

app.listen(port,()=>{
    console.log('in port 5000')
})