import './Counter.css';
import { useState } from 'react';
import CounterButton from './CounterButton';
export default function Counter() {

    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementParentMethod(by) {
        setCount(count - by)
    }

    function resetFunction() {
        setCount(0)
    }

    // function someParentMethod() {
    //     console.log('Some Parent Method called')
    // }
    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} someIncrementMethod={incrementCounterParentFunction} someDecrementMethod={decrementParentMethod} />
            <CounterButton by={2} someIncrementMethod={incrementCounterParentFunction} someDecrementMethod={decrementParentMethod} />
            <CounterButton by={5} someIncrementMethod={incrementCounterParentFunction} someDecrementMethod={decrementParentMethod} />
            <button className="counterButton" onClick={resetFunction}
                >Reset</button>
        </>
    )
}


