import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Fillform from './components/Fillform.jsx';
import Alllists from './components/Alllists.jsx';
import $ from "jquery";
import { PieChart } from "react-minimal-pie-chart";

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
        <PieChart data={[
          { title: 'Markers', value: this.state.markers, color: '#E38627' },
          { title: 'Binders', value: this.state.binders, color: '#C13C37' },
          { title: 'A4 paper', value: this.state.papers, color: '#6A2135' },
          ]}
          style={{ height: '200px' }}
          label={({ dataEntry }) => `${dataEntry.title} ${Math.round(dataEntry.percentage)} % `}
          lineWidth={10}
          paddingAngle={5}
          labelPosition={80}
          labelStyle= {{fontSize: '8px',fontFamily: 'sans-serif'}}

        />;
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