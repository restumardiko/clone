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

  return (
    <div className="pt-[7.2rem] lg:pt-[6.8rem]">
      <NavSub title={"Buy Now"} />
      <div id="book_detail" className="mt-16 mb-8">
        <div className="bg-white w-[90%] p-8 shadow-md rounded-md mx-auto ">
          <div
            id="container_book"
            className=" flex flex-col md:gap-10 md:flex-row "
          >
            <img className="  w-36 mx-auto md:mx-0 " src={buy.cover} alt="" />
            <div className=" px-5 ">
              <h1 className="font-bold text-base text-gray-600 py-4">
                {buy.title}/{buy.author}/{buy.year}
              </h1>

              <h1 className="text-red-500  font-semibold">
                Rp. {buy["price"].toLocaleString()}
              </h1>
              <div id="button">
                <div id="check_out">
                  <div id="total-amount" className="h-auto  mt-3">
                    <h1 className="text-sm font-bold">
                      Total :Rp.{(quantity * buy.price).toLocaleString()}
                    </h1>
                    <div
                      id="how-much-item"
                      className="flex flex-row border text-gray-500 border-gray-300 w-[7.6rem] my-2 text-xl"
                    >
                      <button
                        onClick={() => {
                          minus(buy.id);
                        }}
                        id="decrease-item"
                        className="w-10 h-10 "
                      >
                        -
                      </button>
                      <h1 className="h-10 w-10  text-base text-center pt-2 ">
                        {quantity}
                      </h1>
                      <button
                        onClick={() => {
                          plus(buy.id);
                        }}
                        id="increase-item"
                        className="w-10 h-10 "
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="bg-gray-800  text-white w-[7.6rem] h-[2rem] block hover:bg-orange-500"
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
    </div>
  );
}
