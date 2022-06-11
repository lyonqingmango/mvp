
import React from 'react';
import FormList from './Formlist.jsx';

class Alllists extends React.Component {
  constructor(props) {
    super(props);
    console.log("props.alllists  "+ this.props.alllists[1])


  }
  render(){
    return(
      <div>
      <p>Display all Incoming Requests</p>
      <ul>
      {this.props.alllists.map((form, key)=> < FormList form = {form} key ={ form.id} />)}
      </ul>
      </div>

    )
  }
}
export default Alllists