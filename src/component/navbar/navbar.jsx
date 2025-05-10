import Input from "./input";
import Chart from "./cart";
import Subnav from "./subnav/subnav";
import Wishlist from "./wishlist";
import Account from "./account";
import { Link } from "react-router-dom";
import Slicknav from "./slicknav";
import { useState } from "react";

export default function Navbar() {
  const [isSlack, setIsSlack] = useState(false);

  function onSlack() {
    setIsSlack(!isSlack);
  }
  return (
    <>
      <div id="nav-container" className="fixed z-50 w-[100%] top-0 shadow-md ">
        <div className=" bg-red-700 px-3 lg:px-0 pb-3 lg:pb-0 ">
          <div className="flex 	flex-row h-16 lg:h-[4.3rem] lg:w-full lg:mx-auto  justify-between lg:text-md  ">
            <Link className="my-auto" to="/">
              <div className="text-white lg:ml-20 lg:h-14 ">
                <h1 className="  text-[1.67rem] lg:text-[1.55rem] lg:tracking-wider  font-semibold  ">
                  PERIPLUS.COM
                </h1>
                <h2 className="text-sm -mt-3 lg:text-sm py-1">
                  Indonesia's largest bookstore
                </h2>
              </div>
            </Link>
            <div className="flex flex-row items-center lg:space-x-6  ">
              <Wishlist />
              <Chart />
              <Account />
              <Slicknav slack={onSlack} />
            </div>
          </div>
          <div className={isSlack ? "  h-auto " : "lg:block hidden h-auto "}>
            <Subnav />
          </div>
          <Input />
        </div>
      </div>
    </>
  );
}
