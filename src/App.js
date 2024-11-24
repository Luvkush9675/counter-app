import { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0);
  const [type, settype] = useState();

  const Addcounter = () => {
    if (count < 10) {
      setcount(count + 1);
      settype(" Value is positive");
    } 
    else {
      settype("You have Maximum limit");
    }
  }


const SubtCounter = () => {
  if (count) {
    setcount(count - 1);
    settype("Value is positive");
  } 
  else {
    settype("you have minimum number limit ");
  }
}


return (
  <div className="App">
    <h1>Type is:{type}</h1>
    <h1>Count is : {count}</h1>

    <button onClick={Addcounter}>+</button>
    <button onClick={SubtCounter}>-</button>

  </div>
);
}

export default App;
