import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Fillform from './components/Fillform.jsx';
import Alllists from './components/Alllists.jsx';
import $ from "jquery";


// var fakedata= [{"_id":"62a6240c1f5098528359fef0","course":"Math","createdAt":"2022-06-12T17:36:01.977Z",
// "items":[{"itemname":"Marker","quantity":1},{"itemname":"Binder","quantity":2}],"__v":0},


// {"_id":"62a624cee57b9576df48f987","course":"Data science","createdAt":"2022-06-12T17:38:58.424Z","items":[{"itemname":"Marker","quantity":1},{"itemname":"Binder","quantity":3}],"__v":0},


// {"_id":"62a628db4dc4dd384c5bbff9","course":"Art","createdAt":"2022-06-12T17:56:28.970Z","items":[{"itemname":"Marker","quantity":1},{"itemname":"A4 paper","quantity":4}],"__v":0}]







class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alllists:[],
      formData:{},
      markers:0,
      binders:0,
      papers:0,
    }
    this.handleSubmit =this.handleSubmit.bind(this)

  }
  componentDidMount(){

    this.display()
  }

  display(){
    console.log('inside display')
    // display total:
    $.get( '/post', (data)=>{
      console.log('data inside client display'+ data)
      var markersCount = 0
      var bindersCount=0
      var paperCount =0

      data.forEach((form)=>{
        form.items.forEach((item)=>{
          if(item.itemname==='Marker'){
            markersCount+=item.quantity
          }else if(item.itemname==='Binder'){
            bindersCount+=item.quantity
          }else{
            paperCount+=item.quantity
          }
        })


      })
      this.setState({markers:markersCount})
      this.setState({binders:bindersCount})
      this.setState({papers:paperCount})
      this.setState({alllists:data})

    });

  }



  handleSubmit(formdata){
    console.log('data inside index.jsx'+ formdata.course)

    console.log('data items inside index.jsx '+ formdata.items[0].itemname)

    $.ajax({
      type: "POST",
      url: '/post',
      // contentType: application/x-www-form-urlencoded,
      contentType: "application/json",
      data: JSON.stringify(formdata),
      success: ()=>{console.log('post success'); this.display()},
      error: (e)=>(console.log('error inside post client'))

    });

  }
  render(){
    return(
      <div>
        <h1>Supply Request Form</h1>
        <Fillform handleSubmit={this.handleSubmit}/>
        <h4>Total items request:</h4>
        <ul>Markers: {this.state.markers}</ul>
        <ul>Binders: {this.state.binders}</ul>
        <ul>A4 paper: {this.state.papers}</ul>
        < Alllists alllists = {this.state.alllists} />
      </div>


    )
  }
}
export default App

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('app'));