const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')
.then(() => console.log('Connected to MongoDB...')).catch((err) => console.error("Coudn't connect MongoDB....", err));;

const itemSchema =new mongoose.Schema({
 itemname: String,
 quantity:Number,

});

const formSchema = new mongoose.Schema({
  _id:Number,
  course: String,
  items:[itemSchema]
});


const FormModle = mongoose.model('FormModle', formSchema);
const ItemModle = mongoose.model('ItemModle', itemSchema);
console.log('items in formmodle'+(new FormModle()).items);

let save= (data, callback)=>{
  console.log('inside database'+ data.course)
  console.log('inside database itemname'+ data.items[0].itemname)
//  data.items.forEach((item)= {new })


}
let display =()=>{

}
module.exports ={
  save,
  display,

}