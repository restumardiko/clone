import { Link } from "react-router-dom";

function onWish(e) {
  // e.preventDefault();

  console.log("wishlist clicked");
}

function Wishlist() {
  return (
    <Link className="my-auto" to="/wishlist">
      <button onClick={onWish} className=" text-6xl text-white   px-3">
        ♥
      </button>
    </Link>
  );
}

export default Wishlist;
