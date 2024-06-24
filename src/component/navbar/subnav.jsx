import BargainBooks from "./bargainBooks";
import Categories from "./categories";
import NewRealease from "./newRealease";
import PacBarcode from "./pacBarcode";
import PreOrder from "./preOrder";
import StoreLocation from "./storeLocation";
import Wishlist from "./wishlist";

function Subnav() {
  return (
    <div className="flex flex-direction:row bg-white-600">
      <Categories />
      <NewRealease />
      <PreOrder />
      <BargainBooks />
      <Wishlist />
      <StoreLocation />
      <PacBarcode />
    </div>
  );
}

export default Subnav;
