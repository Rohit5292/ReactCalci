import './App.css';
import {useState} from 'react'


function App() {
  const[result,setresult]= useState('');

  function Keypress(event){
    if (event.target.value==='AC'){
      setresult('');
    }
    else if(event.target.value==="+/-"){
      if(result.charAt(0)==='-'){
        setresult((result));
      }
      else{
        setresult('-'+result);
      }
    }
    else if (event.target.value==="="){
   setresult( String(eval(result))); 
    }
    else{
    setresult(result.concat(event.target.value));
  }
  }
  

  return (
    <div className="Body">
    <div className="Calculator">
    <input type="text" value={result}/>
      <button value='1' onClick={Keypress}>1</button>
      <button value='2'onClick={Keypress}>2</button>
      <button value='3'onClick={Keypress}>3</button>
      <button value='4'onClick={Keypress}>4</button>
      <button value='5'onClick={Keypress}>5</button>
      <button value='6'onClick={Keypress}>6</button>
      <button value='7'onClick={Keypress}>7</button>
      <button value='8'onClick={Keypress}>8</button>
      <button value='9'onClick={Keypress}>9</button>
      <button value='0'onClick={Keypress}>0</button>
      <button value='+'onClick={Keypress}>+</button>
      <button value='-'onClick={Keypress}>-</button>
      <button value='*'onClick={Keypress}>*</button>
      <button value='/'onClick={Keypress}>/</button>
      <button value='='onClick={Keypress}>=</button>
      <button value='AC'onClick={Keypress}>AC</button>
      <button value='+/-'onClick={Keypress}>+/-</button>
      <button value='%'onClick={Keypress}>%</button>
      </div>
      
    </div>
  );
}

export default App;
