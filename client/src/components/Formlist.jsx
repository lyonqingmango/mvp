import React from 'react';
class FormList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props.form id "+ this.props.form.id)
    console.log("props.form item "+ this.props.form.items[0].itemname)
  }
  render(){
    return(
      <div>
      <p> {this.props.form.course} created at : {this.props.form.createdAt}</p>
      <table>
        <thead>
          <tr>
          <th> Item</th>
          <th> Quantity</th>
          </tr>
        </thead>
        {this.props.form.items.map((item, key) => {
          return (
            <tbody key={key}>
              <tr>
              <td> {item.itemname}</td>
              <td> {item.quantity}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
    )
  }
}

export default FormList