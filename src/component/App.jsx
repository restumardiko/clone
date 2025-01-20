import "./App.css";
import Content from "./booklist/content";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Iklan from "./iklan/iklan";
import data from "../utils";
import { createContext } from "react";
export const BookContext = createContext();

function App() {
  const handelCart = (param) => {
    console.log(param);
  };
  const handleBuyNow = (param) => {
    console.log(param);
  };
  const handleWish = (param) => {
    console.log(param);
  };

  return (
    <BookContext.Provider value={{ handelCart, handleBuyNow, handleWish }}>
      <div className="periplusApp">
        <Navbar />
        <Iklan />
        <Content data={data} />
        <Footer />
      </div>
    </BookContext.Provider>
  );
}

export default App;
