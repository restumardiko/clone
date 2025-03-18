import { Link } from "react-router-dom";

function onWish(e) {
  // e.preventDefault();

  console.log("wishlist clicked");
}

function Wishlist() {
  return (
    <Link to="/wishlist">
      <button onClick={onWish} className=" text-7xl text-zinc-50 p-6">
        ♥
      </button>
    </Link>
  );
}

export default Wishlist;
