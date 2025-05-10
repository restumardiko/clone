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
    <div className="pt-[7.2rem] lg:pt-[6.8rem]">
      <NavSub title={"Shoping Cart"} />
      <div id="cartProduct" className="  mb-2 mt-10 lg:mt-14   ">
        {cart.length === 0 ? (
          <div className="text-gray-600 mx-4 px-4 lg:px-10 lg:mx-0 bg-white bg-opacity-95">
            <h1 className="text-4xl font-bold ">Shopping Cart</h1>
            <h2 className="text-base  my-1 ">Your Shopping Cart is Empty</h2>
            <Link to="/">
              <button className="text-base  my-1">Continue</button>
            </Link>
          </div>
        ) : (
          <>
            <ul className="bg-white w-[95%] mx-auto lg:w-[80%]  ">
              {cart.map((book) => (
                <li
                  className="flex flex-row lg:gap-12 w-full shadow-sm py-4 px-4 lg:px-8 lg:py-8 "
                  key={book.id}
                >
                  <div className="inline m-2 pt-2">
                    <img className="w-24  " src={book.cover} alt="" />
                  </div>
                  <div className="pt-8">
                    <div className="inline ">
                      <h1 className="text-sm font-bold opacity-70">
                        {book.title}
                      </h1>
                      <h1 className="text-sm opacity-50">{book.author}</h1>
                      {/* <h1>{book.year}</h1> */}
                      <h1 className="text-sm font-semibold text-gray-600 my-2">
                        Rp.{book["price"].toLocaleString()}
                      </h1>
                    </div>
                    <div
                      id="how-much-item"
                      className="flex flex-row border justify-center items-center border-solid w-[7.5rem] border-gray-300  text-xl text-center"
                    >
                      <button
                        onClick={() => {
                          minus(book.id);
                        }}
                        id="decrease-item"
                        className="w-10 h-10 text-gray-500 text-2xl "
                      >
                        -
                      </button>
                      <h1 className="h-10 w-10 text-gray-500 text-base pt-2 ">
                        {quantity[book.id]}
                      </h1>
                      <button
                        onClick={() => {
                          plus(book.id);
                        }}
                        id="increase-item"
                        className="w-10 h-10 text-gray-500 "
                      >
                        +
                      </button>
                    </div>
                    <div className=" remove text-xs ">
                      <button
                        className=" bg-slate-200 shadow-sm border-gray-300 border p-1 px-8  mt-5 hover:bg-orange-500 hover:text-white"
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
            <div className="container-lastSection  flex lg:justify-end  shadow-md bg-white mt-1 w-[95%] lg:w-[80%] mx-auto lg:mb-8 ">
              <div className="total-amount h-auto b m-16 mt-3 w-80 lg:w-56 text-justify text-base mx-auto lg:mx-10 ">
                <div className="flex justify-between my-2  ">
                  <h2>Sub-Total </h2>
                  <h2> Rp.{harga.toLocaleString()}</h2>
                </div>
                <div className="flex justify-between my-2">
                  <h2>Total</h2>
                  <h2> Rp.{harga.toLocaleString()}</h2>
                </div>

                <button
                  className="bg-gray-800  text-xs font-semibold text-white w-full h-10 block lg:hover:bg-orange-500"
                  onClick={checkout}
                >
                  CHECKOUT
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
