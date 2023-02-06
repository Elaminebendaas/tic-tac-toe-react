import { useState } from "react";

function Square(props){
    return( <button onClick={props.click}>{props.content}</button>)
}
export default Square