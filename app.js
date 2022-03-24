const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('static'))
app.use(urlencoded());

app.set('viewengine','pug');
app.set('views',path.join(__dirname,'views'))

// ENDPOINTS 
app.get("/", (req,res)=>{
    res.status(200).render('index.pug')
})
    

// Listening to server

app.listen(port,()=>{

})