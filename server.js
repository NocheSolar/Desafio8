const express = require('express')
const app = express()
const rutas =require('./routes/index')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//app.use('/',express.static(__dirname + '/'))

app.use('/api', rutas)

app.use((error,req,res,next)=>{
    console.log(error.message)
    res.status(error.statusCode).send(error.message)
})

app.listen(8080,()=>{
    console.log('Servidor escuchando puerto 8080')
})