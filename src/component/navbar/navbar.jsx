import Input from "./input";
import Chart from "./cart";
import Subnav from "./subnav/subnav";
import Wishlist from "./wishlist";
import Account from "./account";

export default function Navbar() {
  return (
    <>
      <div id="nav-container" className="relative z-50">
        <div className="flex 	flex-direction: row bg-red-600 min-h-28 justify-center text-xl ">
          <div className="text-white  ">
            <h1 className="text-6xl">PERIPLUS.COM</h1>
            <h2 className="text-2xl">Indonesias largest bookstore</h2>
          </div>
          <Input />
          <Wishlist />
          <Chart />
          <Account />
        </div>
        <Subnav />
      </div>
    </>
  );
}
