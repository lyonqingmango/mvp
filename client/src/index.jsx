import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Fillform from './components/Fillform.jsx';
import Alllists from './components/Alllists.jsx';
import $ from "jquery";


var fakedata= [{
  "id":"1",
  "course":'Data science',
  'items':[{ 'itemname': 'paper',
'quantity':"2"},{'itemname': 'makers',
'quantity':"1"}]},
 {"id":"2",
  "course":'Math',
  'items':[{ 'itemname': 'binders',
  'quantity':"3"}]}]



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alllists:fakedata,
      formData:{},
      makers:0,
      binders:0,
      papers:0,
    }
    this.handleSubmit =this.handleSubmit.bind(this)

  }

  display(){
    console.log('inside display')
    // display total:

  }

  componentDidMount(){

    this.display()
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
      success: ()=>{console.log('post success')},
      error: (e)=>(console.log('error inside post client'))

    });

  }
  render(){
    return(
      <div>
        <h1>Supply Request Form</h1>
        <Fillform handleSubmit={this.handleSubmit}/>
        < Alllists alllists = {this.state.alllists} />
        <p>Total items request:</p>
        <ul>Makers: {this.state.makers}</ul>
        <ul>Binders: {this.state.binders}</ul>
        <ul>A4 paper: {this.state.papers}</ul>
      </div>


    )
  }
}
export default App

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('app'));