const express = require('express')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')
const connectDB  = require('./config/connectDB')
const {app, server}  = require('./socket/index')
require('dotenv').config()
// const app = express()



app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=> {
    res.json({
        message:"Server running at " + PORT
    })  
})

app.use('/api',router)

connectDB().then(()=>{
    server.listen(PORT,()=> {
        console.log(`Server running at the port ${PORT}`)
    })
})

