import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../App";

function Cart() {
  const { cart } = useContext(BookContext);
  let harga = 0;
  console.log(cart);
  cart.map((each) => (harga += each.price));
  return (
    <div className="group   ">
      <Link className=" " to="/cart">
        <h1 className="static text-xs  text-white text-end pb-[0.22rem] lg:text-sm  ">
          {cart.length}
        </h1>
        <div className="relative px-2 -top-[0.6rem] lg:-top-[0.8rem] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className=" size-5 lg:size-6  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </Link>
      <div
        id="drop-down"
        className=" opacity-0 lg:absolute bg-red-700 w-[23%] -ml-64 lg:p-3 lg:top-7 lg:mt-20 lg:group-hover:opacity-100 min-h-40 shadow-lg transition-opacity delay-100  z-10 text-white lg:text-sm  "
      >
        <div id="drop-down-header " className="text-xs ">
          <div className="flex flex-row justify-between my-3 font-semibold">
            <span className=" mx-3 text-left">{cart.length} ITEMS(S)</span>
            <span className="text-right mx-3">SHOPING CART</span>
          </div>
          <div className="w-full h-[0.01rem] my-1  bg-white"></div>
        </div>

        <ul>
          {cart.length <= 3 ? (
            <div>
              {cart.map((x) => (
                <li key={x.id} className="text-sm ">
                  <span className="flex justify-between flex-row">
                    <div>
                      <span className="block">{x.title}</span>
                      <span>1=Rp.{x["price"].toLocaleString()}</span>
                    </div>

                    <img className="w-16" src={x.cover} alt="" />
                  </span>
                  <div className="w-full h-[0.01rem] my-1  bg-white"></div>
                </li>
              ))}
            </div>
          ) : (
            <>
              <div>
                {cart.slice(0, 3).map((x) => (
                  <li key={x.id} className="text-sm ">
                    <span className="flex justify-between flex-row">
                      <div>
                        <span className="block">{x.title}</span>
                        <span>1=Rp.{x["price"].toLocaleString()}</span>
                      </div>

                      <img className="w-16" src={x.cover} alt="" />
                    </span>
                    <div className="w-full h-[0.1rem] my-1  bg-white"></div>
                  </li>
                ))}
              </div>{" "}
              <Link className=" " to="/cart">
                <button className="inline text-sm">
                  View more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 inline"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </>
          )}
        </ul>
        <span>
          {cart.length != 0 ? (
            <>
              <b className="flex flex-row justify-between text-sm text-gray-900">
                <span>Total:</span>
                <span>Rp. {harga.toLocaleString()}</span>
              </b>
              <button className="block w-[90%] h-10 bg-gray-900 mx-auto mt-5 font-semibold">
                PROCEED TO CHECKOUT
              </button>
            </>
          ) : (
            "Your shopping cart is empty"
          )}
        </span>
      </div>
    </div>
  );
}

export default Cart;
