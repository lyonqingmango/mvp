import React from 'react';

class Fillform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {course:'',
    items:[],
    select1:"Marker",
    select2:"Binder",
    item1quantity:1,
    item2quantity:0,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange(event) {
    var name = event.target.name;
    console.log('name in fill form handle select change   '+ name )


    this.setState({[name]:event.target.value});
  }
  handleInputChange(event){
    var name = event.target.name;
    if(event.target.value>=0){
      this.setState({[name]:event.target.value});
    }



  }

  handleSubmit(event) {
    event.preventDefault();
    var arr =[];
    var item1 ={"itemname": this.state.select1, "quantity": this.state.item1quantity};
    arr.push(item1)

    if(this.state.select2.length>0 && this.state.item2quantity>0){
      var item2 = {"itemname": this.state.select2, "quantity": this.state.item2quantity};
      arr.push(item2);
    }

    this.setState({items:arr})
    console.log('submit data in fillform' + this.state.items[0])

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Item 1
          <select name="select1" value={this.state.select1} onChange={this.handleChange}>
          <option value="Marker">Marker </option>
            <option value="A4 paper">A4 paper</option>
            <option value="Binder">Binder</option>
          </select>
          <input
            name="item1quantity"
            type="number"
            value={this.state.item1quantity}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
         Item 2:
         <select name="select2" value={this.state.select2} onChange={this.handleChange}>
          <option value="Marker">Maker </option>
            <option value="A4 paper">A4 paper</option>
            <option value="Binder">Binder</option>
          </select>
          <input
            name="item2quantity"
            type="number"
            value={this.state.item2quantity}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>


    )
  }
}
export default Fillform