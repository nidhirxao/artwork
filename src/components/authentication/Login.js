import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
const [email,setEmail] = React.useState("");
const [password,setPassword] = React.useState("")
const [disp, setDisp] = React.useState(false);



function handleSubmit(e){
    e.preventDefault();
     
   
 const ls =    localStorage.getItem('credentials')
 const json = JSON.parse(ls)
//  console.log("HELLO",json.email,email)
 if(json.email==email && json.password==password){
    console.log("TRUE",)
    // navigate('/products')
     window.location.replace('/products')
 }
 else { 
    setDisp(true)
   
 }
}
  return (
    <form className='inner-login-signup'>

    <h3>Log in</h3>

    <div className="form-group">
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password" />
    </div>
    <p style={{marginTop:'20px',color:'red',fontSize:"12px",display:`${disp===true?"block":"none"}`}}>Wrong credentials</p>
    {/* <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div> */}

    <button onClick={(e)=>handleSubmit(e)}  className="btn btn-dark btn-lg btn-block mt-2 ">Sign in</button>
    <p className="forgot-password text-right">
        don't have account? <a href="/">Register</a>
    </p>
</form>

  )
}

export default Login