import React from "react";

function Greeting(props){
    return (
        <div>
            <p>Hello user, {props.name} </p>
            <p>You are {props.age} years old.</p>
        </div>
    );
}

export default Greeting;