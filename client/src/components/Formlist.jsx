import React from 'react';
import Itemlist from './Itemlist.jsx';
import Table from 'react-bootstrap/Table';

class FormList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props.form id "+ this.props.form.id)
    console.log("props.form item "+ this.props.form.items[0].itemname)
  }
  render(){
    return(
      <div>
      <p>Display a Request</p>
      <p> {this.props.form.course}</p>

      <ul>
      {this.props.form.items.map((item, key)=> < Itemlist item = {item} key = {key} />)}
      </ul>

      </div>
    )
  }
}

export default FormList