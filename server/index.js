const express = require('express');
const app = express();
const port = 2000;
var bodyParser = require('body-parser');

const {save,display} = require('../database/index.js')
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());


app.post('/post',(req,res)=>{
  console.log("req.body"+ req.body.course)
  save(req.body,(err,result)=>{
    if(err){
      res.status(500).send('err inside post server')
    }else{
      res.status(201).send(result)
    }

  });




})
app.get('/post', (req, res) => {
  display((err, data)=>{
    if(err){
      res.status(500).send('can not display')
    }else{
      res.status(200).send(data)
    }
  })
  // res.send('hello')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
