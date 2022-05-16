import { createContext,useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({
        productid:"",
        productName:"",
        productPrice:"",
    })

    const [quantity,setQuantity] = useState(0);
  return(
      <CartContext.Provider value={[quantity,setQuantity]}>
          {props.children}
      </CartContext.Provider>
  )
};


