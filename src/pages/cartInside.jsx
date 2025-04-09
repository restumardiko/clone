import Footer from "../component/footer/footer";
import { useState } from "react";
import NavSub from "../component/navbar/navigation";
import { Link } from "react-router-dom";

export default function CartInside({ cart, handleRemove }) {
  console.log("sikamanis", cart);
  function getInitialCartData(cart) {
    const initialDataCart = {};
    cart.forEach((element) => {
      initialDataCart[element.id] = 1;
    });
    return initialDataCart;
  }
  const [quantity, setQuantity] = useState(getInitialCartData(cart));

  function plus(id) {
    console.log("plus");
    console.log(quantity[id]);
    console.log(quantity);
    setQuantity((ea) => {
      return { ...ea, [id]: ea[id] + 1 };
    });
  }

  function minus(id) {
    console.log("minus");
    console.log(id);
    console.log("plus");
    console.log(quantity[id]);
    setQuantity((ea) => {
      return { ...ea, [id]: Math.max(ea[id] - 1, 1) };
    });
  }
  function checkout() {
    console.log("checkout");
    console.log(quantity);
  }
  let harga = 0;
  cart.map((each) => {
    // console.log(quantity[each.id]);
    console.log(quantity[each.id] * each.price);
    harga += quantity[each.id] * each.price;
  });

  return (
    <>
      <NavSub title={"Shoping Cart"} />
      <div id="cartProduct" className="p-20 m-20 mb-2 mt-40">
        {cart.length === 0 ? (
          <div className="text-gray-600">
            <h1 className="text-7xl font-extrabold ">Shopping Cart</h1>
            <h2 className="text-2xl font-semibold my-2">
              Your Shopping Cart is Empty
            </h2>
            <Link to="/">
              <button className="text-2xl font-semibold my-2">Continue</button>
            </Link>
          </div>
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
                    <h1>Rp.{book["price"].toLocaleString()}</h1>
                  </div>
                  <div id="how-much-item" className="">
                    <button
                      onClick={() => {
                        minus(book.id);
                      }}
                      id="decrease-item"
                    >
                      -
                    </button>
                    <h1>{quantity[book.id]}</h1>
                    <button
                      onClick={() => {
                        plus(book.id);
                      }}
                      id="increase-item"
                    >
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
              <h1>Total :Rp.{harga.toLocaleString()}</h1>
              <button onClick={checkout}>CHECK OUT</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
