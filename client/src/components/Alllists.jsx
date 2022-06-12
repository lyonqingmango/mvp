
import React from 'react';
import FormList from './Formlist.jsx';

var fakedata= [{"_id":"62a6240c1f5098528359fef0","course":"Math","createdAt":"2022-06-12T17:36:01.977Z","items":[{"itemname":"Marker","quantity":1},{"itemname":"Binder","quantity":2}],"__v":0},{"_id":"62a624cee57b9576df48f987","course":"Data science","createdAt":"2022-06-12T17:38:58.424Z","items":[{"itemname":"Marker","quantity":1},{"itemname":"Binder","quantity":3}],"__v":0}]


class Alllists extends React.Component {
  constructor(props) {
    super(props);
    console.log("props.alllists  "+ this.props.alllists[1])


  }
  render(){
    return(
      <div>
      <h3>Display all Incoming Requests</h3>
      <ul>
      {this.props.alllists.map((form, key)=> < FormList form = {form} key ={form._id} />)}
      </ul>
      </div>

    )
  }
}
export default Alllists