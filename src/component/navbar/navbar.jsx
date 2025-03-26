import Input from "./input";
import Chart from "./cart";
import Subnav from "./subnav/subnav";
import Wishlist from "./wishlist";
import Account from "./account";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div id="nav-container" className="relative z-50 ">
        <div className="flex 	flex-direction: row bg-red-700 h-24 justify-center text-xl  ">
          <Link className="my-auto" to="/">
            <div className="text-white mx-5  ">
              <h1 className="text-4xl font-bold ">PERIPLUS.COM</h1>
              <h2 className="text-2xl">Indonesias largest bookstore</h2>
            </div>
          </Link>
          <Input />
          <div className="flex flex-direction:row w-50">
            <Wishlist />
            <Chart />
            <Account />
          </div>
        </div>
        <Subnav />
      </div>
    </>
  );
}
