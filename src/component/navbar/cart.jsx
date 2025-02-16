import { Link } from "react-router-dom";

function Cart({ cart }) {
  console.log(cart);
  return (
    <div className="group">
      <h1>{cart.length}</h1>
      <Link to="/cart">
        <button className="text-5xl p-6">🛒</button>
      </Link>
      <div
        id="drop-down"
        className="absolute bg-red-500 w-80  top-50 mt-20 group-hover:block hidden -z-10"
      >
        <div id="drop-down-header" className="block">
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
