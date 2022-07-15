import React, {useState, useContext} from 'react'
import { ThemeContext } from './App';
export default function CounterHooks(props) {
    const [count, setCount] = useState(props.initialCount);
    const style = useContext(ThemeContext);
    let changeCount = (amt) => {
        setCount(count + amt);
    }
    return(
        <div>
            <button style={style} onClick={()=>{
                changeCount(-1)
            }} className="btn">-</button>
            <span>{count}</span>
            <button style={style} onClick={()=>{
                changeCount(1)
            }}className="btn">+</button>
          </div>
    )
}