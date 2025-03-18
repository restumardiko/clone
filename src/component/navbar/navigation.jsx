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
    <div id="cartPageNav" className="h-8 bg-slate-50">
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1 className="inline">{"->"}</h1>
      {pageLink}
    </div>
  );
}
