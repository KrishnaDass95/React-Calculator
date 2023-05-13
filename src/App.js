import "./style.css"
import React from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";

const App = () => {

    return (
        <div className="app-container">
            <h1>React Calculator</h1>
            <div className="input-group">
            <Input placeholder="Num 1"/>
            <Input placeholder="Num 2" />
            </div>


            <div className="button-group">
            <Button buttonType="+"/>
            <Button buttonType="-"/>
            <Button buttonType="*"/>
            <Button buttonType="/"/>
            </div>
            
            <div className="results">
            <p>Result: </p>
            <p>Message: </p>
            </div>
            

            
        </div>
    )
}

export default App;