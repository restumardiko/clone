function onWish(e) {
  e.preventDefault();
  console.log("wishlist clicked");
}

function Wishlist() {
  return (
    <button onClick={onWish} className=" text-7xl text-zinc-50 p-6">
      ♥
    </button>
  );
}

export default Wishlist;
