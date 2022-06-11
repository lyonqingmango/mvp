import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Fillform from './components/Fillform.jsx';
import Alllists from './components/Alllists.jsx';

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
    this.state = {alllists:fakedata}

  }
  render(){
    return(
      <div>
        <h1>Supply Request Form</h1>
        <Fillform />
        < Alllists alllists = {this.state.alllists} />
      </div>


    )
  }
}
export default App

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('app'));