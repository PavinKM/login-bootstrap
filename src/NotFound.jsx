import { Link } from "react-router-dom"

function NotFound (){
    return(
        <>
            <h2>Page Not Founddd ...</h2>
            {/*<a className="btn btn-primary" href="/">Home</a>    redirect to home page && its send request to server && get response from server and reload*/}
            <Link className="btn btn-primary" to="/">Home</Link> {/*routes by brouserouter itself */}
        </>  
               
    )
}

export default NotFound