import BargainBooks from "./bargainBooks";
import Categories from "./categories";
import NewRealease from "./newRealease";
import PreOrder from "./preOrder";
import StoreLocation from "./storeLocation";

function Subnav() {
  return (
    <div className="flex flex-direction:row bg-yellow-600 text-2xl">
      <Categories />
      <NewRealease />
      <PreOrder />
      <BargainBooks />
      <StoreLocation />
    </div>
  );
}

export default Subnav;
