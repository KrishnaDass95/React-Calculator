import "./style.css";
import React, { useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [ans, setAns] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="app-container">
      <h1>React Calculator</h1>
      <div className="input-group">
        <Input placeholder="Num 1" num={setNum1} />
        <Input placeholder="Num 2" num={setNum2} />
      </div>

      <div className="button-group">
        <Button
          buttonType="+"
          n1={num1}
          n2={num2}
          answer={setAns}
          message={setMsg}
        />
        <Button buttonType="-" 
        n1={num1}
        n2={num2}
        answer={setAns}
        message={setMsg}
        />
        <Button buttonType="*" 
        n1={num1}
        n2={num2}
        answer={setAns}
        message={setMsg}
        />
        <Button buttonType="/" 
        n1={num1}
        n2={num2}
        answer={setAns}
        message={setMsg}
        />
      </div>

      <div className="results">
        <p>Result: {ans}</p>
        <p>Message: {msg}</p>
      </div>
    </div>
  );
};

export default App;
