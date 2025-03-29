import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../App";

function Cart() {
  const { cart } = useContext(BookContext);
  console.log(cart);
  return (
    <div className="group  ">
      <Link className=" " to="/cart">
        <h1 className="relative top-3 left-8 text-white  ">{cart.length}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-11 mb-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </Link>
      <div
        id="drop-down"
        className="absolute bg-red-700 w-80 top-24 mt-20 group-hover:block hidden z-10 text-white"
      >
        <div id="drop-down-header" className="block ">
          <h1 className="inline-block">{cart.length} Items</h1>
          <h1 className="inline-block">shoping Cart</h1>
        </div>

        {/* <h1>
          {cart.length > 0 ? `You have ${cart.length} items` : "Cart is empty"}
        </h1> */}
        <ul>
          {cart.map((x) => (
            <li>
              <h1>{x.title}</h1>
            </li>
          ))}
        </ul>
        <button>proceed to checkOut</button>
      </div>
    </div>
  );
}

export default Cart;
