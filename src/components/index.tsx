import {useState} from "react";
import classes from "./counter.module..scss"

export const Counter = () => {

    const [increment, setIncrement] = useState(0)

    return(
        <div className={classes.btn}>
            <h1>{increment}</h1>
            <button onClick={() => setIncrement(increment + 1)}>increment</button>
        </div>
    )
}

