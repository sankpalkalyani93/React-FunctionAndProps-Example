import React from "react";

function Summation(props){
  
    const sum = props.result;
    return (
        
        <div>
            <p>Summation : {sum}</p>
        </div>
    );
}

export default Summation;