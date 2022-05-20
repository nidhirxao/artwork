import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [show,setShow] = React.useState(false)
  const [error,setError] = React.useState(false)
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
 
    if(creds.name!=''&&creds.email!=''&&creds.password!=''){
      setError(false)
      setShow(true)
    setTimeout(() => navigate("/login"), 5000);
    }
    else{
      setError(true)
    }
    
   
  }
  useEffect(()=>{
    localStorage.setItem("credentials", JSON.stringify(creds));
   
  },[credsSubmit, ])



  



  console.log(creds);
  return (
    <div style={{display:'flex',textAlign:'start',flexDirection:'column',justifyContent:"center",alignItems:'center'}}>
      <h4 style={{background:'#00ff55',padding:'6px 8px',borderRadius:'10px',display:`${show===true?"block":"none"}`,color:'white'}}>Registration Successful!! Redireting to login page</h4>
      <form className="inner-login-signup mt-5">
      <h3>Register</h3>
      <label style={{color:'red',textAlign:'center',display:`${error==true?"block":"none"}`}}>Please fill all the fields</label>
      <div className="form-group">
        <label>Name</label>
        <input onChange={handleSubmit} type="text" name="name" className="form-control" placeholder="enter name" required />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
        onChange={handleSubmit}
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          required
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
          required
        />
      </div>
     
      <button   onClick={credsSubmit} className="btn btn-dark btn-lg btn-block mt-2">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/login">log in</a>
      </p>
    </form>

    </div>
    );
}

export default Signup;
