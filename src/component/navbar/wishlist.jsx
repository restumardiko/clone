import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../App";

function Wishlist() {
  const { wish } = useContext(BookContext);
  return (
    <Link className="my-auto" to="/wishlist">
      <h1 className="static text-xs h-auto text-white lg:text-sm text-end   ">
        {wish.length}
      </h1>
      <button className=" px-2 relative -top-[0.3rem] lg:-top-[0.5rem] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className=" size-5 lg:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </Link>
  );
}

export default Wishlist;
