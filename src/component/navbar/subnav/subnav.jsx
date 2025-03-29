import BargainBooks from "./bargainBooks";
import Categories from "./categories";
import NewRealease from "./newRealease";
import PreOrder from "./preOrder";
//import StoreLocation from "./storeLocation";

function Subnav() {
  return (
    <div id="subnav" className="bg-gray-200 ">
      <div className="flex items-center flex-row bg-gray-200 h-14 text-2xl font-semibold w-3/4 mx-auto ">
        <Categories />
        <NewRealease />
        <PreOrder />
        <BargainBooks />
        {/* <StoreLocation /> */}
      </div>
    </div>
  );
}

export default Subnav;
