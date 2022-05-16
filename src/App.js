import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState,useContext } from "react";
import SignUp from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import Products from "./components/products/Products";
import Purchase from "./components/cart/Purchase";
import Cart from "./components/cart/Cart";
import { CartContext } from "./components/context/context";
import Navbar from "./components/navbar/Navbar";


function App() {
  const [items, setItems] = useState(0);

  return (
    <Router>
      <div className="App">
      <Navbar/>
        <div className="outer">
          <div className="inner">
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<SignUp />} />
              <Route exact path="/purchase" element={<Purchase />} />
              <Route exact path="/products" element={<Products />} />
              <Route
                exact
                path="/cart"
                element={<Cart />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
