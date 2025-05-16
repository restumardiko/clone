import { Link } from "react-router-dom";

export default function NavSub({ title }) {
  // Tentukan link berdasarkan title
  let pageLink;
  if (title === "Wish List") {
    pageLink = (
      <Link to="/wishlist">
        <button>Wish List</button>
      </Link>
    );
  } else if (title === "Shoping Cart") {
    pageLink = (
      <Link to="/cart">
        <button>Shopping Cart</button>
      </Link>
    );
  } else {
    pageLink = (
      <Link to="/buynow">
        <button>Buy Now</button>
      </Link>
    );
  }

  return (
    <div
      id="cartPageNav"
      className=" flex pl-[8%]   fixed text-sm  h-8  text-gray-600 w-full z-10 bg-slate-50"
    >
      <div className=" w-auto my-auto  h-5 ">
        <Link to="/">
          <button>Home</button>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 inline mx-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>

        {pageLink}
      </div>
    </div>
  );
}
