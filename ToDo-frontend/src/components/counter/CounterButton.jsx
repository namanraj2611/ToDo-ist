import { PropTypes } from 'prop-types'

export default function CounterButton({ by, someIncrementMethod, someDecrementMethod }) {

    // const buttonStyle = {
    //     fontSize: "24px",
    //     backgroundColor: "red",
    //     borderRadius: "9px",
    //     color: "white",
    //     margin: "20px",
    //     padding: "5px",
    // }

    // const state = useState(0);
    //this is called De-construcuting, similar to => const [firstElt, secondElt]=array
    // const [count, setCount] = useState(0)


    // function counterIncrementFunction() {
    //     // state[1](state[0]+1)
    //     // //state[0] contains the current state, and state[1] contains the update function 
    //     // console.log(state[0])
    //     // console.log(state[1])
    //     //setCount(count + by)
    //     someIncrementMethod(by)
    //     // console.log(count)
    //     // console.log("increment Clicked!")

    // }

    // function counterDecrementFunction() {
    //     //setCount(count - by)
    //     someDecrementMethod(by)
    //     // console.log(count)
    // }

    return (
        <div className="Counter">
                {/* // style={{fontSize:"20px"}}
                //style={buttonStyle} */}
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" onClick={()=>someIncrementMethod(by)}
                >+{by}</button>

                <button className="counterButton" onClick={()=>someDecrementMethod(by)}
                >-{by}</button>

            </div>
        </div>
    )
}

// Validation/Constraint that Counter's by shpuld be number type only
CounterButton.propTypes = {
    by: PropTypes.number
}

//Setting up default "by" Value for Counter.jsx 
CounterButton.defaultProps = {
    by: 1
}