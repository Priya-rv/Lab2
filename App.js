import './App.css';
import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      address:"",
      phone:"",
      email:"",
      age:"",

      results:{}
    }
  }
  handleonChange=(event)=> {
    this.setState({name:event.target.value});
  }
  handleonChangeAddress=(event)=> {
    this.setState({address:event.target.value});
  }
  handleonChangePhone=(event)=> {
    this.setState({phone:event.target.value});
  }
  handleonChangeEmail=(event)=> {
    this.setState({email:event.target.value});
  }
  handleonChangeAge=(event)=> {
    this.setState({age:event.target.value});
  }
handleButtonOnClick=()=>{
  const result={
    name:this.state.name,
    address:this.state.address,
    phone:this.state.phone,
    email:this.state.email,
    age:this.state.age,
  }
  this.setState({results:result});
}
render(){
  return(
    <React.Fragment>
      <div className="main">
        <h1>Student Registration Portal</h1>
        Name : <input className="name" type="text" value={this.state.name} onChange={this.handleonChange}/><br/><br/>
        Address : <input className="address" type="text" value={this.state.address} onChange={this.handleonChangeAddress}/><br/><br/>
        Phone : <input className="phone" type="text" value={this.state.phone} onChange={this.handleonChangePhone}/><br/><br/>
        E-mail : <input className="email" type="text" value={this.state.email} onChange={this.handleonChangeEmail}/><br/><br/>
        Age : <input className="age" type="number" value={this.state.age} onChange={this.handleonChangeAge}/><br/><br/>
      <button onClick={this.handleButtonOnClick}>Click</button><br/><br/>
      {
        Object.keys(this.state.results).length ? JSON.stringify(this.state.results):null
      }
      </div>
    </React.Fragment>
  )
  }
}



export default App;