import { Link } from "react-router-dom";

export default function CartInside() {
  return (
    <>
      <div id="cartPageNav" className=" h-8 bg-slate-50">
        <Link to="/">
          <button>Home</button>
        </Link>
        <h1 className="inline">{"->"}</h1>
        <Link to="/cart">
          <button>Shoping Cart</button>
        </Link>
      </div>
      <div id="cartPage" className=" h-96 bg-gray-100 m-20 ">
        {}
      </div>
    </>
  );
}
