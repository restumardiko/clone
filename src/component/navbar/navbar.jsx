import Input from "./input";
import Chart from "./chart";
import Subnav from "./subnav";
import Wishlist from "./wishlist";
import Account from "./account";

export default function Navbar() {
  return (
    <>
      <div className="flex 	flex-direction: row bg-red-600 min-h-28 justify-center text-xl ">
        <div className="text-white  ">
          <h1 className="text-6xl">PERIPLUS.COM</h1>
          <h2 className="text-2xl">Indonesia's largest bookstore</h2>
        </div>
        <Input />
        <Wishlist />
        <Chart />
        <Account />
      </div>
      <Subnav />
    </>
  );
}
