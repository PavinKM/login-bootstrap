import { useState } from "react"

function Login() {  //starts with captital

    const [pwd1, setPwd1] = useState("")
    const [pwd2, setPwd2] = useState("")

    const [err, setErr] = useState("")

    const [match, setMatch] = useState(false)

    function handlePwd1Change(event){
        setPwd1(event.target.value)
        console.log(event)
    }

    function handlePwd2Change(event){
        setPwd2(event.target.value)
        console.log(event)
    }

    function handlePwdCheck(){
        if(pwd1 == pwd2){
            setErr("Same")
            setMatch(true)       
        }else{
            setErr("Not Same")
            setMatch(false)
        }
    }

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
                    <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Re-Enter Password</label>
                    <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" onChange={handlePwdCheck} className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">I Agree</label>
                </div>
                <p>{err}</p>
                {match && <p>Password Match</p>}
                {!match && <p>Password Not Match</p>}
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </>
    )   //ctrl+F
}
// react ia a library
//npm install react-router-dom 
//npm run dev
export default Login