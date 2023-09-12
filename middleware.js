const express = require('express')
const app= express()
const logger = (req,res,next) =>{
    const method =req.method
    const url =req.url
    const time=new Date().getFullYear()
    console.log(method,url,time)
    next()
    
}

app.get('/',logger,(req,res)=>{
    
})
app.get('/about',(req,res)=>{
    
    res.status(200).send('about page ')

})
app.listen(5000,()=>{
    console.log('server is listing on port 5000..')
})