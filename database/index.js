const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')
.then(() => console.log('Connected to MongoDB...')).catch((err) => console.error("Coudn't connect MongoDB....", err));;

// const formSchema = new mongoose.Schema({
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   },
//   course: String,
//   items:[{
//     itemname:String,
//     quantity: Number,
//     _id: false,
//   }]
// });
const formSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  course: String,
  createdAt:{
    type:Date,
    default: new Date(),
  },
  items:[{
    itemname:String,
    quantity: Number,
    _id: false,
  }]
});


const FormModle = mongoose.model('FormModle', formSchema);

let save= async (data, callback)=>{
  // await FormModle.deleteMany();

  console.log('inside database'+ data.course)
  console.log('inside database itemname  '+ data.items[0].itemname)

  FormModle.create(data)
  .then((result)=>{console.log('success save'+ result); callback(null,result)})
  .catch((err)=>callback('can not insert'))

// var fakedata= [{

//   "course":'Data science',
//   'items':[{ 'itemname': 'paper',
// 'quantity':"2"},{'itemname': 'makers',
// 'quantity':"1"}]},
//  {
//   "course":'Math',
//   'items':[{ 'itemname': 'binders',
//   'quantity':"3"}]}]
}

// let display =()=>{

// }
let display =(callback)=>{
  FormModle.find({})
  .then((data)=>{console.log('success display'+ data); callback(null, data)})
  .catch((err)=>callback(err))

}
module.exports ={
  save,
  display,

}