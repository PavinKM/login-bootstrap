import { useState } from "react"

function Login() {  //starts with captital

    const [pwd1, setPwd1] = useState("")
    const [pwd2, setPwd2] = useState("")

    return (
        <>
            <form className="my-5" style={{width:"50%", margin:"auto"}}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Re-Enter Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">I Agree</label>
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </>
    )   //ctrl+F
}

export default Login