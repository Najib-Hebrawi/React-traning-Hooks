import React, { Component } from 'react'




export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    
  }





   decrement= ()=>{
    this.setState({
      count: this.state.count -1
    })
  }
   increment= ()=>{
   this.setState({
     count: this.state.count +1
   })
  }

  render() {
    return (
  
      <div>
     
     <h1> welcome dude </h1>
     <p>the count is {this.state.count}</p>

     <button onClick={this.decrement} style={{padding:10}}>-</button>
     <button onClick={this.increment} style={{padding:10}}>+</button>

      </div>
    )
  }
}

