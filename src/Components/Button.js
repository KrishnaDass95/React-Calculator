import React from "react";


const Button = ({ buttonType, n1, n2, answer, message }) => {


    const isNumber = (value) => {
        return /^-?\d*(\.\d+)?$/.test(value);
    }

    function calculate(n1, n2, buttonType){
        switch(buttonType){
            case '+' : answer(n1+n2);
            break;
            case '-' : answer(n1-n2);
            break;
            case '*' : answer(n1*n2);
            break;
            case '/' : answer(n1/n2);
        }
    }

    function validate(){
        // check if n1 and n2 are integers
        if(n1 && n2){
            if(isNumber(n1) && isNumber(n2)){
                n1 = Number(n1);
                n2 = Number(n2);
                calculate(n1, n2, buttonType);
                message("success! your result is shown above")
            }


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