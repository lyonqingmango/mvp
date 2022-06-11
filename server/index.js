const express = require('express');
const app = express();
const port = 2000;
var bodyParser = require('body-parser');

const {save,display} = require('../database/index.js')
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());


app.post('/post',(req,res)=>{
  console.log("req.body"+ req.body.course)
  save(req.body,(err,res)=>{
    if(err){
      res.status(500).send('post err')
    }else{
      res.status(201).send(result)
    }

  });




})
app.get('/post', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
