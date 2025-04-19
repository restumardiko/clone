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
        <div className="bg-white w-[85%] mx-auto p-5 shadow-md rounded-md ">
          <div id="container_book" className="m-20 flex flex-row ">
            <img className=" m-2" src={buy.cover} alt="" />
            <div className="w-[40%]  text-2xl mx-10">
              <h1 className="font-bold text-3xl text-gray-600">
                {buy.title}/{buy.author}/{buy.year}
              </h1>

              <h1 className="text-red-500 font-bold">
                Rp. {buy["price"].toLocaleString()}
              </h1>
              <div id="button">
                <div id="check_out">
                  <div id="total-amount" className="h-44  mt-3">
                    <h1 className="text-2xl font-bold">
                      Total :Rp.{(quantity * buy.price).toLocaleString()}
                    </h1>
                    <div
                      id="how-much-item"
                      className="flex flex-row border text-gray-500 border-gray-300 w-60 my-2 text-3xl"
                    >
                      <button
                        onClick={() => {
                          minus(buy.id);
                        }}
                        id="decrease-item"
                        className="w-20 h-20 py-3"
                      >
                        -
                      </button>
                      <h1 className="h-20 w-20  py-5 text-center">
                        {quantity}
                      </h1>
                      <button
                        onClick={() => {
                          plus(buy.id);
                        }}
                        id="increase-item"
                        className="w-20 h-20  py-3"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="bg-gray-800  text-white w-60 h-[4rem] block hover:bg-orange-500"
                      onClick={checkout}
                    >
                      CHECK OUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
