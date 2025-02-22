import { Link } from "react-router-dom";
import Footer from "../component/footer/footer";
import { useState } from "react";

export default function CartInside({ cart, handleRemove }) {
  console.log("sikamanis", cart);
  const [quantity, setQuantity] = useState();

  function plus() {
    console.log("plus");
  }
  function minus() {
    console.log("minus");
  }
  function checkout() {
    console.log("checkout");
  }

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
      <div id="cartProduct" className="bg-gray-100 m-20 mb-2">
        {cart.length === 0 ? (
          <h1>kosong</h1>
        ) : (
          <>
            <ul>
              {cart.map((book) => (
                <li className="" key={book.id}>
                  <div className="inline m-5">
                    <img className="w-32 h-48" src={book.cover} alt="" />
                  </div>
                  <div className="inline">
                    <h1 className="">{book.title}</h1>
                    <h1>{book.author}</h1>
                    <h1>{book.year}</h1>
                    <h1>Rp.{book.price}</h1>
                  </div>
                  <div id="how-much-item" className="">
                    <button onClick={minus} id="decrease-item">
                      -
                    </button>
                    <input type="text" value={1} readOnly />
                    <button onClick={plus} id="increase-item">
                      +
                    </button>
                  </div>
                  <div id="remove">
                    <button
                      onClick={() => {
                        handleRemove(book.id);
                      }}
                    >
                      REMOVE
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div id="total-amount" className="h-44 bg-gray-200 m-20 mt-3">
              <h1>Total :</h1>
              <button onClick={checkout}>CHECK OUT</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
