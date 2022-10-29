const express = require('express')
const app = express()
const PORT  = 8000;
const HOST ='0.0.0.0';

app.get('/', (req, res)=>{
    res.send("hello in image DOCKER");
})


app.listen(PORT, HOST, ()=>{
    console.log("application is started")
} )