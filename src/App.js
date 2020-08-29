import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Button";
import Input from "./components/Input";
import EqualButton from "./components/EqualButton";
import * as math from "mathjs";

export default function App() {
  const [input, setInput] = useState("");

  function handleClear() {
    setInput("");
    console.clear()
  }

  function addtoInputNum(val) {
    setInput((prevInput) => prevInput + val);
  }

  function addtoInputOpr(val) {
    if (input === "") {
      return;
    } else {
      setInput((prevInput) => prevInput + val);
    }
  }

  function handleEqual() {
    if (input === "") {
      return;
    } else {
      console.log(math.evaluate(input));
      setInput(math.evaluate(input));
    }
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={input}></Input>
        <div className="row">
          <Button handleClick={addtoInputNum}>7</Button>
          <Button handleClick={addtoInputNum}>8</Button>
          <Button handleClick={addtoInputNum}>9</Button>
          <Button handleClick={addtoInputOpr}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addtoInputNum}>4</Button>
          <Button handleClick={addtoInputNum}>5</Button>
          <Button handleClick={addtoInputNum}>6</Button>
          <Button handleClick={addtoInputOpr}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addtoInputNum}>1</Button>
          <Button handleClick={addtoInputNum}>2</Button>
          <Button handleClick={addtoInputNum}>3</Button>
          <Button handleClick={addtoInputOpr}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addtoInputNum}>.</Button>
          <Button handleClick={addtoInputNum}>0</Button>
          <Button handleClick={handleClear}>C</Button>
          <Button handleClick={addtoInputNum}>-</Button>
        </div>
        <div className="row">
          <EqualButton handleClick={handleEqual}>=</EqualButton>
        </div>
      </div>
    </div>
  );
}
