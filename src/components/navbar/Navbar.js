import React,{useContext, useEffect, useState} from 'react'
import {  Link, Navigate, useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";

import { CartContext } from '../context/context';
import {IoMdLogOut} from 'react-icons/io'
import './navbar.css'
function Navbar() {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate();

  useEffect(()=>{
     if(localStorage.length != 0){
    const name = localStorage.getItem('credentials')
    const name2 = JSON.parse(name)
    setUserName(()=> name2.name)
  }
  },[]) 
  function remove(e){
    localStorage.removeItem('credentials')
    navigate('/')
   
    
  }

   const [quantity,setQuantity] = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-1 ">
    <div className="container">
      <Link className="navbar-brand" to={"/products"}>
        E-Commerce
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/products"}>
              Shp
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-up"}></Link>
          </li>
        </ul>
        <div>
        </div>
      </div>
          <p style={{marginRight:'20px'}}>{ userName ? userName: null }</p>
      <Link className="cart-main" to={"/cart"}>
          <BiCartAlt style={{width:'30px',height:'30px'}}/>
          <p className='cart-qty'>{quantity}</p>

        </Link>
        { userName ? (
          <a href='/' style={{margin:'10px',textDecoration:'none',height:'30px', width:"fit-content",textAlign:'center',padding:'0px 10px',background:'red', color:"white",borderRadius:'10px', cursor:'pointer'}}>Log out</a>)  : null  
          }
        </div>
  </nav>

  )
}

export default Navbar