import BargainBooks from "./bargainBooks";
import Categories from "./categories";
import NewRealease from "./newRealease";
import PreOrder from "./preOrder";
import StoreLocation from "./storeLocation";

function Subnav() {
  return (
    <div id="subnav" className="flex flex-direction:row bg-gray-100 text-2xl">
      <Categories />
      <NewRealease />
      <PreOrder />
      <BargainBooks />
      {/* <StoreLocation /> */}
    </div>
  );
}

export default Subnav;
