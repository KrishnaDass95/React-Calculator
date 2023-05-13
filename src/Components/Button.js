import React from "react";


const Button = ({ buttonType, n1, n2, answer, message }) => {

    function calculate(n1, n2, buttonType){
        if(buttonType == '+'){
            answer(n1+n2);
        }
    }

    function validate(){
        // check if n1 and n2 are integers
        if(n1 && n2){
            
        }
        else{
            message("field is empty, enter value")
        }
        

    }
    
    return (
        <button onClick={validate}>{buttonType}</button>
    )
}

export default Button;