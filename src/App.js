import { useState } from "react";
import './App.css'
import {
 evaluate
} from 'mathjs'

function App() {
  const [result, setResult] = useState("");

  function handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "C":
        setResult("");
        break;
      case "+/-":
        if (result.charAt(0) === "-") {
          setResult(result.slice(1));
        } else {
          setResult("-" + result);
        }
        break;
      case "=":
        try{
        setResult(String(evaluate(result)));
        }
        catch{
          setResult("invalid input")
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (
          result === "" ||
          result.charAt(result.length - 1) === "+" ||
          result.charAt(result.length - 1) === "-" ||
          result.charAt(result.length - 1) === "*" ||
          result.charAt(result.length - 1) === "/"
        ) {
          break;
        } else {
          setResult(result.concat(value));
          break;
        }
      default:
        setResult(result.concat(value));
        break;
    }
  }

  return (
    <div className="calculator">
    <div className="buttonsWrapper">
      <input className="Input" type="text" value={result} />
      </div>
      <div>
      <button value="C" onClick={handleClick}>
        C
      </button>
      <button value="+/-" onClick={handleClick}>
        +/-
      </button>
      <button value="%" onClick={handleClick}>
        %
      </button>
      <button value="/" onClick={handleClick}>
        ÷
      </button>
      </div>
      <div className="buttonsWrapper">
      <button value="7" onClick={handleClick}>
        7
      </button>
      <button value="8" onClick={handleClick}>
        8
      </button>
      <button value="9" onClick={handleClick}>
        9
      </button>
      <button value="*" onClick={handleClick}>
        ×
      </button>
      </div>
      <div className="buttonsWrapper">
      <button value="4" onClick={handleClick}>
        4
      </button>
      <button value="5" onClick={handleClick}>
        5
      </button>
      <button value="6" onClick={handleClick}>
        6
      </button>
      <button value="-" onClick={handleClick}>
        -
      </button>
      </div>
      <div className="buttonsWrapper">
      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button value="+" onClick={handleClick}>
        +
      </button>
      </div>
      <div>
      <button value="0" onClick={handleClick}>
        0
      </button>
      <button value="." onClick={handleClick}>
        .
      </button>
      <button value="=" onClick={handleClick}>
        =
      </button>
      </div>
    </div>
  );
}

export default App;
