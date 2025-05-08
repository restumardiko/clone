import { useState } from "react";
import BargainBooks from "./bargainBooks";
import Categories from "./categories";
import NewRealease from "./newRealease";
import PreOrder from "./preOrder";
//import StoreLocation from "./storeLocation";

function Subnav() {
  const [isCategorySpread, setIsCategorySpread] = useState(false);
  const [isBargainSpread, setIsBargain] = useState(false);
  function handleCategory() {
    console.log("handleCategory");
    setIsCategorySpread(!isCategorySpread);
    console.log(isCategorySpread);
  }
  function handleBargain() {
    console.log("handleBargain");
    setIsBargain(!isBargainSpread);
    console.log(!isBargainSpread);
  }
  return (
    <div
      id="subnav"
      className="lg:bg-gray-200 lg:w-full lg:block h-auto lg:px-10 "
    >
      <div className=" py-6 lg:py-0 h-auto pb-2 flex flex-col gap-4 lg:gap-0 text-sm font-semibold text-white items-start lg:items-center lg:text-gray-800 lg:flex-row lg:bg-gray-200 lg:h-10 lg:text-sm lg:font-semibold lg:w-full lg:mx-auto ">
        <Categories
          handleCategory={handleCategory}
          isCategorySpread={isCategorySpread}
        />
        <div
          className={
            isCategorySpread
              ? "categories_drop_down flex flex-col items-start  lg:hidden px-6 gap-3 "
              : "hidden "
          }
        >
          <button>Fiction</button>
          <button>Business</button>
          <button>Self Development</button>
          <button>Parenting</button>
        </div>
        <NewRealease />
        <PreOrder />
        <BargainBooks
          handleBargain={handleBargain}
          isBargainSpread={isBargainSpread}
        />
        <div
          className={
            isBargainSpread
              ? "bargain_books_drop_down  lg:hidden flex flex-col items-start px-6 gap-3 "
              : " hidden"
          }
        >
          <button>under Rp. 50,000</button>
          <button>Rp. 50,000 - 100,000</button>
          <button>above 100,000</button>
        </div>
        {/* <StoreLocation /> */}
      </div>
    </div>
  );
}

export default Subnav;
