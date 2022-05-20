import React, { useEffect } from "react";
import Product from "./Product";
import "./updates.css";
import axios from "axios";
import Amazon from "../../assets/products/Amazon.jpg";
import Boa from "../../assets/products/Boa.jpg";
import Frisk from "../../assets/products/Frisk.jpg";
import Lucaart from "../../assets/products/Lucaart.jpg";
import Madilyn from "../../assets/products/Madilyn.jpg";
import Mulan from "../../assets/products/Mulan.jpg";
import SW from "../../assets/products/SW.jpg";

function Updates() {
  const [data, setData] = React.useState([]);
  const [load,setLoad] = React.useState(false);
 
const PORT = "http://localhost:5001";
  
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
    axios
      .get(`${PORT}/api/v1/product/`)
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  return (
    <div className="update-container">
      <div className="grid-container">
        {data.map((dat, idx) => {
          
          return(
            <div>
              {
                images[idx]?<Product
                image={images[idx]}
                productid={dat.productid}
                productName={dat.productName}
                productPrice={dat.productPrice}
              />:null
              }
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Updates;
