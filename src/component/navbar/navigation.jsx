import { Link } from "react-router-dom";

export default function NavSub({ title }) {
  console.log(title);

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
      className=" pl-[8%] text-2xl h-11 text-gray-600   bg-slate-50"
    >
      <div className=" w-80">
        <Link to="/">
          <button>Home</button>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 inline mx-4"
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
