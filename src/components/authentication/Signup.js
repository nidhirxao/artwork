import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [creds, setCreds] = React.useState({
    name:"",
    email:"",
    password:""
  })

  const handleSubmit =(e)=>{      
       setCreds(()=>(
         {...creds, [e.target.name]:e.target.value }
       ))
  }

  const credsSubmit =(e)=>{
    e.preventDefault();
    
    navigate("/login")
    
  }
  useEffect(()=>{
    localStorage.setItem("credentials", JSON.stringify(creds));
   
  },[credsSubmit, ])



  



  console.log(creds);
  return (
    <form className="inner-login-signup mt-5">
      <h3>Register</h3>

      <div className="form-group">
        <label>Name</label>
        <input onChange={handleSubmit} type="text" name="name" className="form-control" placeholder="enter name" />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
        onChange={handleSubmit}
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
        onChange={handleSubmit}
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
        />
      </div>
     
      <button   onClick={credsSubmit} className="btn btn-dark btn-lg btn-block mt-2">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/login">log in</a>
      </p>
    </form>
  );
}

export default Signup;
