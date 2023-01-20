import React, { useState } from 'react';
import classes from "./counter.module.scss";
interface CounterProps {}

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0)
    const Increment = () => {
        setCount(count + 1)
    }
  return (
    <div className={classes.btn}>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
    </div>
  );
};

