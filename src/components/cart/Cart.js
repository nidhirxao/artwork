

import React, {useEffect, useState } from "react";
import './cart.css'
import axios from 'axios'

import Amazon from "../../assets/products/Amazon.jpg";
import Boa from "../../assets/products/Boa.jpg";
import Frisk from "../../assets/products/Frisk.jpg";
import Lucaart from "../../assets/products/Lucaart.jpg";
import Madilyn from "../../assets/products/Madilyn.jpg";
import Mulan from "../../assets/products/Mulan.jpg";
import SW from "../../assets/products/SW.jpg";

function Cart() {
  const[val, setVal] = useState(0)
  const [del, setDel] = useState(false)
  const [data, setData] = useState([])

   
const PORT = process.env.baseURL  
  let price =0;
  const[image, setImage] = useState("")
  const images = [
    { name:"Amazon", 
      url:Amazon },
    { name:"Boa", 
      url:Boa },
    { name:"Frisk", 
      Frisk },
    { name:"Lucaart", 
      url:Lucaart },
    { name:"Madilyn", 
      url:Madilyn },
    { name:"Mulan",
      url:Mulan },
    { name: "SW",
    url:SW },
  ];

 

  useEffect(() => {
    axios.get("${PORT}/api/v1/cart/")
    .then((res)=>{
      setData(res.data)
      console.log(res)
    })
    .catch((error)=>console.log(error))
  }, []);


 

  return (
    <div style={{ marginTop: "20%" }}>
      {del}
      <section class="section-pagetop bg">
        <div class="container">
          <h2
            class="title-page"
            style={{ color: "white", marginBottom: "20px" }}
          >
            Shopping cart
          </h2>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <main class="col-md-9">
              <div class="card">
                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase ">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th scope="col" class="text-right" width="200">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((dat,idx)=>{
                        price+=Number(dat.productPrice);
                        let url = "";
                        images.map(img=>{
                          if(img.name==dat.productImage && img){
                            console.log("approved",img)
                            url = img.url;
                          }
                        })
                       console.log(url)
                       
                        return(
                          <tr  className='table-row'>
                      <td>

                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src={url}
                              class="img-sm"
                              width='150'
                              height='100'
                            />
                          </div>
                          <figcaption class="info">
                            {/* <a href="#" class="title text-dark">
                              Some name of item goes here nice
                            </a> */}
                            <p class="text-muted small">
                              {dat.productName}
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td className="table-row1">
                      <div className="counter">
                        <p onClick={()=>setVal(val-1)}>-</p>
                        <input type='number' value = {val} min='0' className='counterVal' />
                        <p onClick={()=>setVal(val+1)} >+</p>
                      </div>
                      </td>
                      <td className='price-section table-row1'>
                        <div class="price-wrap">
                          <var class="price">{dat.productPrice}</var>
                          <small class="text-muted"> ${dat.productPrice} </small>
                        </div>
                      </td>
                      <td class="text-right" className="price-section">
                        <a
                          type="submit"
                           href = "/cart"
                           onClick={()=>{
                            axios.delete(`${PORT}/api/v1/cart/${dat.productid}`)
                            .then((res)=>{
                              console.log(res)
                              price=price-Number(dat.productPrice);
                              setDel(true);
                            })
                            .catch((error)=>console.log(error))
                           }}
                          class="btn btn-light "
                          style={{ background: "red", color: "white" , marginBottom:'70px'}}
                        >
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                        )
                      })
                    }
                  </tbody>
                </table>

                <div class="card-body border-top">
                  <a href="/" class="btn btn-light">
                    {" "}
                    <i class="fa fa-chevron-left"></i> Continue shopping{" "}
                  </a>
                </div>
              </div>

              <div class="alert alert-success mt-3">
                <p class="icontext">
                  <i class="icon text-success fa fa-truck"></i> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
            </main>
            <aside class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <dl class="dlist-align">
                    <dt>Total price:</dt>
                    <dd class="text-right">USD {price}</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Discount:</dt>
                    <dd class="text-right">USD 0</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Total:</dt>
                    <dd class="text-right  h5">
                      <strong>${price}</strong>
                    </dd>
                  </dl>
                  <hr />
                  <a  onClick={()=>{
                          

                            axios.delete(`${PORT}/api/v1/cart/`)
                            .then((res)=>{
                              console.log(res)
                              
                            })
                            .catch((error)=>console.log(error))
                           }}  href="/purchase" class="btn btn-primary float-md-right">
                    {" "}
                    Make Purchase <i class="fa fa-chevron-right"></i>{" "}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section class="section-name bg padding-y"></section>

      <footer class="section-footer border-top padding-y">
        <div class="container">
          <p class="float-md-right">
            &copy; Copyright 2020 All rights reserved
          </p>
          <p>
            <a href="#">Terms and conditions</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
