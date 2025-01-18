import "./App.css";
import Content from "./booklist/content";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Iklan from "./iklan/iklan";
import data from "../utils";

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
    <div className="periplusApp">
      <Navbar />
      <Iklan />
      <Content
        data={data}
        handleCart={handelCart}
        handleBuyNow={handleBuyNow}
        handleWish={handleWish}
      />
      <Footer />
    </div>
  );
}

export default App;
