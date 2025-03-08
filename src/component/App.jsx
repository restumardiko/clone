import "./App.css";
// import Content from "./booklist/content";
import Navbar from "./navbar/navbar";
import Conconfoot from "./conconfoot";
// import Footer from "./footer/footer";
// import Container from "./containContainer";

// import Iklan from "./iklan/iklan";
// import data from "../utils";
import { createContext, StrictMode, useState } from "react";
//import { Container } from "postcss";
import { Route, Routes } from "react-router-dom";
import WishListInside from "../pages/wishlistInside";
import CartInside from "../pages/cartInside";
import AccountInside from "../pages/accountInside";
import SearchSeet from "../pages/searchSeet";
import { useNavigate } from "react-router-dom";
export const BookContext = createContext();

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const handleRemove = (id) => {
    console.log("this fucking button remove is clicked");
    setCart(cart.filter((book) => book.id !== id));
  };

  const handleChange = (e) => {
    //e.preventDefault();
    console.log(search);

    setSearch(e.target.value);
    if (e.target.value != "") {
      navigate("/search");
    } else {
      navigate("/", { replace: true });
    }
  };

  const handelCart = (param) => {
    setCart((prevCart) => {
      const isSame = prevCart.some((item) => item.id == param.id);
      return isSame ? prevCart : [...prevCart, param];
    });
  };
  const handleBuyNow = (param) => {
    console.log();
  };
  const handleWish = (param) => {
    console.log(param);
  };

  return (
    <BookContext.Provider
      value={{ handelCart, handleBuyNow, handleWish, handleChange, search }}
    >
      <div className="periplusApp">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Conconfoot />} />
          <Route path="/wishlist" element={<WishListInside />} />
          <Route
            path="/cart"
            element={<CartInside cart={cart} handleRemove={handleRemove} />}
          />
          <Route path="/account" element={<AccountInside />} />
          <Route path="/search" element={<SearchSeet />} />
        </Routes>
      </div>
    </BookContext.Provider>
  );
}

export default App;
