import "./App.css";
// import Content from "./booklist/content";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Container from "./containContainer";

// import Iklan from "./iklan/iklan";
// import data from "../utils";
import { createContext, StrictMode, useState } from "react";
//import { Container } from "postcss";
export const BookContext = createContext();
import { Route, Routes } from "react-router-dom";
import WishListInside from "../pages/wishlistInside";

function App() {
  const [cart, setCart] = useState([]);

  const handelCart = (param) => {
    setCart((prevCart) => {
      return [...prevCart, param];
    });
  };
  const handleBuyNow = (param) => {
    console.log();
  };
  const handleWish = (param) => {
    console.log(param);
  };

  return (
    <BookContext.Provider value={{ handelCart, handleBuyNow, handleWish }}>
      <div className="periplusApp">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/wishlist" element={<WishListInside />} />
          <Route path="" />
        </Routes>
        {/* <Container />
        <Footer /> */}
      </div>
    </BookContext.Provider>
  );
}

export default App;
