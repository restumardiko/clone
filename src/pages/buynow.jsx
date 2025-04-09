import { useContext, useState } from "react";

import NavSub from "../component/navbar/navigation";
import { BookContext } from "../component/App";
import Footer from "../component/footer/footer";

export default function BuyNow() {
  const { buy } = useContext(BookContext);

  const [quantity, setQuantity] = useState(1);

  function plus() {
    setQuantity(quantity + 1);
  }

  function minus() {
    quantity !== 1 && setQuantity(quantity - 1);
  }
  function checkout() {}
  console.log(buy);
  return (
    <>
      <NavSub title={"Buy Now"} />
      <div id="book_detail" className="mt-40">
        <div id="bg">
          <div id="container_book" className="m-20">
            <img src={buy.cover} alt="" />
            <h1>{buy.title}</h1>
            <h1>{buy.author}</h1>
            <h1>{buy.year}</h1>
            <h1>{buy.price}</h1>
          </div>
          <div id="button">
            <div id="how-much-item" className="">
              <button
                onClick={() => {
                  minus(buy.id);
                }}
                id="decrease-item"
              >
                -
              </button>
              <h1>{quantity}</h1>
              <button
                onClick={() => {
                  plus(buy.id);
                }}
                id="increase-item"
              >
                +
              </button>
            </div>
            <div id="check_out">
              <div id="total-amount" className="h-44 bg-gray-200 m-20 mt-3">
                <h1>Total :Rp.{quantity * buy.price}</h1>
                <button onClick={checkout}>CHECK OUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
