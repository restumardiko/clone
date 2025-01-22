function onCart(e) {
  e.preventDefault();
  console.log("cart clicked");
}

function Cart({ cart }) {
  console.log(cart);
  return (
    <div className="group">
      <h1>{cart.length}</h1>
      <button onClick={onCart} className="text-5xl p-6">
        🛒
      </button>
      <div className="absolute bg-red-500 w-80 h-40 top-50 mt-20 group-hover:block hidden -z-10">
        <h1>shoping Cart</h1>
        <h1>
          {cart.length > 0 ? `You have ${cart.length} items` : "Cart is empty"}
        </h1>
      </div>
    </div>
  );
}

export default Cart;
