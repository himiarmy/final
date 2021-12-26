import React, { useState } from 'react';
const Counter = () => {
    const [counter, setCounter] = useState(0)
    function increment() {
        setCounter(counter + 1)
    }
    return (
        <div>
            
            <button onClick={increment} className='btn btn-light'> 🖤 {counter}</button>
            
        </div>
    );
};
export default Counter;