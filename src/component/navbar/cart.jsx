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
        <button className="text-5xl  px-2 block">🛒</button>
      </Link>
      <div
        id="drop-down"
        className="absolute bg-red-500 w-80 top-24 mt-20 group-hover:block hidden z-10 text-white"
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
