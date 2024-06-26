import { useState } from 'react';
import './App.css';
import Greeting from './Greeting';
import Summation from './Summation';

function App() {
  const name = "kalyani";
  const age = 30;
  const [num1, setNum1] = useState(0); 
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value))
  }

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value))
  }

  const summation = (e) => {
    setResult(num1 + num2)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p><Greeting name={name} age={age}/></p> 
        <div> 
          <p>
            <input type="text" value={num1} onChange={handleNum1Change} placeholder='Enter value for num1 '/>
          </p>
          <p>
            <input type="text" value={num2} onChange={handleNum2Change} placeholder='Enter value for num2 '/>
          </p>
          <p><button onClick={summation}>Calculate Sum</button></p>
       </div>
        <p><Summation result={result}/></p> 
      </header>
    </div>
  );
}

export default App;
