import Input from "./input";
import Chart from "./cart";
import Subnav from "./subnav/subnav";
import Wishlist from "./wishlist";
import Account from "./account";
import { Link } from "react-router-dom";
import Slicknav from "./slicknav";
import { useState } from "react";

export default function Navbar() {
  const [isSlack, setIsSlack] = useState(true);

  function onSlack() {
    setIsSlack(!isSlack);
  }
  return (
    <>
      <div id="nav-container" className="fixed z-50 w-full top-0 shadow-md ">
        <div className=" bg-red-700 px-5 pb-3  ">
          <div className="flex 	flex-direction: row h-20 lg:h-12 justify-between lg:text-md  ">
            <Link className="my-auto" to="/">
              <div className="text-white   ">
                <h1 className="  text-[2.1rem] font-semibold  ">
                  PERIPLUS.COM
                </h1>
                <h2 className="text-lg -mt-3">Indonesia's largest bookstore</h2>
              </div>
            </Link>
            <div className="flex flex-row items-center lg:space-x-10  ">
              <Wishlist />
              <Chart />
              <Account />
              <Slicknav slack={onSlack} />
            </div>
          </div>
          <div
            className={
              isSlack ? "lg:hidden  h-auto " : "lg:hidden hidden h-auto "
            }
          >
            <Subnav />
          </div>
          <Input />
        </div>
      </div>
    </>
  );
}
