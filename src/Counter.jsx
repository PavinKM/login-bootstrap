//updater function
import {  useState , useEffect,useContext, useRef} from "react";
//import { dataContext } from "./Home";

function Counter(){

    const [count, setCount] = useState(0)

    //useRef
    let refCount = useRef(0) //similar to useState but it wont re-render, it update in backend

    //const data = useContext(dataContext)   //useContext

    function increment(){
        //update function
        setCount(prevCount => prevCount + 1) // => setCount(count + 1)
        refCount.current += 1 //useRef
        //console.log(count) //asyncronous function so im using useefect
    }

    useEffect(()=>{
        console.log(count)
    },[count])  //dependency on count 

    return(
        <>
            <h2 className="m-5">{count}</h2>
            <button className="m-5" onClick={increment}>Up</button>
            {/* <h2>{data}</h2> */}
        </>
    );

}

export default Counter