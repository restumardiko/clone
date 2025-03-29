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
        <div className=" bg-red-700 ">
          <div className="flex 	flex-direction: row h-24 justify-center space-x-64 text-xl  ">
            <Link className="my-auto" to="/">
              <div className="text-white   ">
                <h1 className="text-4xl  font-bold ">PERIPLUS.COM</h1>
                <h2 className="text-2xl">Indonesias largest bookstore</h2>
              </div>
            </Link>
            <Input />
            <div className="flex flex-row items-center space-x-10  ">
              <Wishlist />
              <Chart />
              <Account />
            </div>
          </div>
        </div>
        <Subnav />
      </div>
    </>
  );
}
