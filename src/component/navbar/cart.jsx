function onCart(e) {
  e.preventDefault();
  console.log("cart clicked");
}

function Cart() {
  return (
    <button onClick={onCart} className="text-5xl p-6">
      🛒
    </button>
  );
}

export default Cart;
