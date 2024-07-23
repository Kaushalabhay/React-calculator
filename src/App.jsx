import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [input , setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleChange=(e)=>{
    setInput(e.target.value)
  }

  const handleCalculate = () => {
    setInput(eval(input).toString());
  }; 

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      handleCalculate();
    }
  };

  return (
    <div className="outerDiv">
      <h2 className="h2">Calculator</h2> 
      <div className="innerDiv">    
        <input className="display" value={input} onChange={handleChange} onKeyDown={handleKeyDown}>
        </input>
        <div className="row">
          <button className="button" onClick={() => {handleClick("1")}}>1</button>
          <button className="button" onClick={() => {handleClick("2")}}>2</button>
          <button className="button" onClick={() => {handleClick("3")}}>3</button>
          <button className="add" onClick={() => {handleClick("+")}}>+</button>
        </div>
        <div className="row">
          <button className="button" onClick={() => {handleClick("4")}}>4</button>
          <button className="button" onClick={() => {handleClick("5")}}>5</button>
          <button className="button" onClick={() => {handleClick("6")}}>6</button>
          <button className="sub" onClick={() => {handleClick("-")}}>-</button>
        </div>
        <div className="row">
          <button className="button" onClick={() => {handleClick("7")}}>7</button>
          <button className="button" onClick={() => {handleClick("8")}}>8</button>
          <button className="button" onClick={() => {handleClick("9")}}>9</button>
          <button className="mul" onClick={() => {handleClick("*")}}>*</button>
        </div>
        <div className="row">
          <button className="button" onClick={() => {handleClick("0")}}>0</button>
          <button className="divide" onClick={() => {handleClick("/")}}>/</button>
          <button className="clear" onClick={handleClear}>C</button>
          <button className="submit" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}
