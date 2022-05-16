import React,{useContext} from "react";
import { CartContext } from "../context/context";
import './Products.css'
import { BiCartAlt } from "react-icons/bi";
import axios from 'axios';

function Product({image,productid,productName,productPrice}) {
  const [quantity,setQuantity] = useContext(CartContext);
  
const PORT = process.env.baseURL  

  const obj ={
    productid:productid,
    productName:productName,
    productPrice:productPrice,
    productQty:0,
    created_at:Date.now(),
    updated_at:Date.now(),
    productImage:image.name,
  }
  
  console.log(image)
  return (
    <div>
      <div className="single-product">
        <img
          src={image?.url||"https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          style={{width:'100%',maxHeight:'250px'}}
          alt="product-image"
          className="product-image"
        />
        <div className="product-details">
          <p>Name: {productName}</p>
          <p>Price: {productPrice}</p>
        </div>
        <button className="add-cart-button" onClick={(e)=>{
           axios.post(`${PORT}/api/v1/cart/`,obj)
           .then((res)=>{
             
             console.log(res)
           })
           .catch((error)=>console.log(error))

          setQuantity(quantity+1)}}>Add to card <BiCartAlt /></button>
      </div>
    </div>
  );
}

export default Product;
