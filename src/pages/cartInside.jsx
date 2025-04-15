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
    <div className="pt-[9.5rem]">
      <NavSub title={"Shoping Cart"} />
      <div id="cartProduct" className=" m-48 mb-2 mt-10 ">
        {cart.length === 0 ? (
          <div className="text-gray-600 ">
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
            <ul className="bg-white">
              {cart.map((book) => (
                <li
                  className="flex flex-row w-full shadow-md p-8"
                  key={book.id}
                >
                  <div className="inline m-5 pt-2">
                    <img className="w-32 h-48 mx-20 " src={book.cover} alt="" />
                  </div>
                  <div className="pt-10">
                    <div className="inline ">
                      <h1 className="text-2xl font-bold opacity-70">
                        {book.title}
                      </h1>
                      <h1 className="text-2xl opacity-50">{book.author}</h1>
                      {/* <h1>{book.year}</h1> */}
                      <h1 className="text-2xl font-semibold text-gray-600 m-2">
                        Rp.{book["price"].toLocaleString()}
                      </h1>
                    </div>
                    <div
                      id="how-much-item"
                      className="flex flex-row border justify-center items-center  border-solid w-60 border-gray-300  text-4xl text-center"
                    >
                      <button
                        onClick={() => {
                          minus(book.id);
                        }}
                        id="decrease-item"
                        className="w-20 h-20 text-gray-500 py-3"
                      >
                        -
                      </button>
                      <h1 className="h-20 w-20 text-gray-500 py-5 text-2xl ">
                        {quantity[book.id]}
                      </h1>
                      <button
                        onClick={() => {
                          plus(book.id);
                        }}
                        id="increase-item"
                        className="w-20 h-20 text-gray-500 py-3"
                      >
                        +
                      </button>
                    </div>
                    <div className=" remove text-xl ">
                      <button
                        className=" bg-slate-200 shadow-md border-gray-300 border p-1 px-14 mt-10 hover:bg-orange-500 hover:text-white"
                        onClick={() => {
                          handleRemove(book.id);
                        }}
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="container-lastSection w-full flex justify-end shadow-md bg-white mt-2">
              <div className="total-amount h-auto b m-20 mt-3 w-80 text-justify text-2xl ">
                <div className="flex justify-between my-2  ">
                  <h2>Sub-Total </h2>
                  <h2> Rp.{harga.toLocaleString()}</h2>
                </div>
                <div className="flex justify-between my-2">
                  <h2>Total</h2>
                  <h2> Rp.{harga.toLocaleString()}</h2>
                </div>

                <button
                  className="bg-gray-800  text-white w-full h-[4rem] block hover:bg-orange-500"
                  onClick={checkout}
                >
                  CHECK OUT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
