import React, { Component } from 'react';



class Comments1 extends Component {

  constructor(props){
    super(props);
    this.state ={
      name:"",
      comment:""
    }
  }

  handleChange=(e)=>{
    
    e.preventDefault();

    this.setState({
     [e.target.name]:e.target.value,
    });
  }

  handlClik=(e)=>{
    // this.props.newItem(this.state)
    e.preventDefault();
    this.props.addItem(this.state.name,this.state.comment)
  }

render (){
    return (
    
  <div>
    <form >
    <input type="text" name="name" placeholder="name" onChange = {this.handleChange} value={this.state.name}>
    </input>
    <input type="text" name="comment" placeholder="your commnts" onChange = {this.handleChange} value={this.state.comment}>
    </input>
    <input type="submit" value="post" onClick={this.handlClik} />
  </form>
  </div>
    )
    
}}


  export default Comments1; 