import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../App";

function Cart() {
  const { cart } = useContext(BookContext);
  let harga = 0;
  console.log(cart);
  cart.map((each) => (harga += each.price));
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
        className="absolute bg-red-700 w-[23%] -ml-64 p-5 top-16 mt-28 group-hover:block min-h-40 shadow-lg hidden z-10 text-white"
      >
        <div id="drop-down-header " className=" ">
          <b className="flex flex-row justify-between my-6">
            <span className=" mx-3 text-left">{cart.length} ITEMS(S)</span>
            <span className="text-right mx-3">SHOPING CART</span>
          </b>
          <div className="w-full h-[0.1rem] my-4  bg-white"></div>
        </div>

        <ul>
          {cart.length <= 3 ? (
            <div>
              {cart.map((x) => (
                <li key={x.id} className="text-2xl ">
                  <span className="flex justify-between flex-row">
                    <div>
                      <span className="block">{x.title}</span>
                      <span>1=Rp.{x["price"].toLocaleString()}</span>
                    </div>

                    <img className="w-28" src={x.cover} alt="" />
                  </span>
                  <div className="w-full h-[0.1rem] my-4  bg-white"></div>
                </li>
              ))}
            </div>
          ) : (
            <>
              <div>
                {cart.slice(0, 3).map((x) => (
                  <li key={x.id} className="text-2xl ">
                    <span className="flex justify-between flex-row">
                      <div>
                        <span className="block">{x.title}</span>
                        <span>1=Rp.{x["price"].toLocaleString()}</span>
                      </div>

                      <img className="w-28" src={x.cover} alt="" />
                    </span>
                    <div className="w-full h-[0.1rem] my-4  bg-white"></div>
                  </li>
                ))}
              </div>
              <button>View More{">>"}</button>
            </>
          )}
        </ul>
        <span>
          {cart.length != 0 ? (
            <>
              <b className="flex flex-row justify-between text-2xl text-black">
                <span>Total:</span>
                <span>Rp. {harga.toLocaleString()}</span>
              </b>
              <button className="w-60 h-20 bg-black mx-auto">
                Proceed to Checkout
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
