import React, {useState} from "react";

// importent point state is non-persistent wich means that when the user refreshes or leave the web page the state will disappear

function App() {


  const [count, setCount] = useState(0);




  const increment =  ()=>{
   
    setCount(count +1);
  }
  const decrement = ()=>{
    setCount(count -1);
  } 

  return (
    <div>
     
     <h1> welcome dude </h1>
     <p>the count is {count}</p>

     <button onClick={decrement} style={{padding:10}}>-</button>
     <button onClick={increment} style={{padding:10}}>+</button>

    </div>
  );
}

export default App;
