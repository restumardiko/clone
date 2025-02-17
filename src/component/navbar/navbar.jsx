import Input from "./input";
import Chart from "./cart";
import Subnav from "./subnav/subnav";
import Wishlist from "./wishlist";
import Account from "./account";
import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  return (
    <>
      <div id="nav-container" className="relative z-50">
        <div className="flex 	flex-direction: row bg-red-600 min-h-28 justify-center text-xl ">
          <Link to="/">
            <div className="text-white  ">
              <h1 className="text-6xl">PERIPLUS.COM</h1>
              <h2 className="text-2xl">Indonesias largest bookstore</h2>
            </div>
          </Link>
          <Input />
          <div className="flex flex-direction:row w-50">
            <Wishlist />
            <Chart cart={cart} />
            <Account />
          </div>
        </div>
        <Subnav />
      </div>
    </>
  );
}
