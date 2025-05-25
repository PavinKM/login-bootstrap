//updater function
import { useEffect, useState } from "react";

function Counter(){

    const [count, setCount] = useState(0)

    function increment(){
        //update function
        setCount(prevCount => prevCount + 1) // => setCount(count + 1)
        //console.log(count) //asyncronous function so im using useefect
    }

    useEffect(()=>{
        console.log(count)
    },[count])  //dependency on count 

    return(
        <>
            <h2 className="m-5">{count}</h2>
            <button className="m-5" onClick={increment}>Up</button>
        </>
    );

}

export default Counter