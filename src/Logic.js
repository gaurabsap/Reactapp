import React, {useState} from "react";
import './App.css'

const Logic = ({title1, title2, title3}) =>{
    const [counter, setCounter] = useState(0);
    const Increase = () =>{
        setCounter(counter + 1)
    }
    const Decrease = () =>{
        setCounter(counter - 1)
    } 
    const Reset = () =>{
        setCounter(0)
    }   

    return <div id="hawa">
        <h1>Counter : {counter}</h1>
        <button onClick={Increase}>{title1}</button>
        <button onClick={Decrease}>{title2}</button>
        <button onClick={Reset}>{title3}</button>
    </div>
}

export default Logic;