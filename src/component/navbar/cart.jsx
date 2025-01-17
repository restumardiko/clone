function onCart(e) {
  e.preventDefault();
  console.log("cart clicked");
}

function Cart() {
  return (
    <div className="group">
      <button onClick={onCart} className="text-5xl p-6">
        🛒
      </button>
      <div className="absolute bg-red-500 w-80 h-40 top-50 mt-20 group-hover:block hidden -z-10">
        <h1>shoping Cart</h1>
        <h2>your cart is empty</h2>
      </div>
    </div>
  );
}

export default Cart;
