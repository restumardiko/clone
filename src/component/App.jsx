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
import MainLayout from "../pages/mainLayout";
import BuyNow from "../pages/buynow";
import { useNavigate } from "react-router-dom";
export const BookContext = createContext();

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [buy, setBuy] = useState([]);
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
  const handelWish = (param) => {
    setWish((prevWish) => {
      const isSame = prevWish.some((item) => item.id == param.id);
      return isSame ? prevWish : [...prevWish, param];
    });
  };
  const handleBuyNow = (param) => {
    console.log(param);
    setBuy(param);
    navigate("/buynow");
  };
  const handleDelete = (id) => {
    console.log("handle delete on ");
    setWish(wish.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{
        handelCart,
        handleBuyNow,
        handelWish,
        handleChange,
        handleDelete,
        wish,
        search,
        cart,
        buy,
      }}
    >
      <div className="periplusApp">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Conconfoot />} />

            <Route
              path="/cart"
              element={<CartInside cart={cart} handleRemove={handleRemove} />}
            />

            <Route path="/wishlist" element={<WishListInside />} />
            <Route path="/search" element={<SearchSeet />} />
            <Route path="/buynow" element={<BuyNow />} />
          </Route>
          <Route path="/account" element={<AccountInside />} />
        </Routes>
      </div>
    </BookContext.Provider>
  );
}

export default App;
