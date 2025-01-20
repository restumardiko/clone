import { useContext } from "react";
import { BookContext } from "../App";

function BookItem({ data, hem }) {
  const { handelCart, handleBuyNow, handleWish } = useContext(BookContext);
  console.log(hem);
  return (
    <div className="flex h-auto w-2/3 overflow-hidden justify-center  ">
      <ul className="flex flex-row  flex-grow justify-center h-auto">
        {data.map((book) => (
          <li
            style={{
              transform: `translateX(-${hem * 100}%)`,
            }}
            className="p-8 transition duration-1000  "
            key={book[0].id}
          >
            <div
              id="single-book"
              className="group w-60 h-96  text-xl overflow-hidden "
            >
              <img className=" w-32 h-48" src={book[0].cover} alt="" />
              <h1>{book[0].title}</h1>
              <h1>{book[0].author}</h1>
              <h2>{book[0].year}</h2>
              <div className="mt-40 group-hover:mt-2 ease-in duration-300 ">
                <button
                  onClick={() => {
                    handleBuyNow(book[0]);
                  }}
                >
                  BuyNow
                </button>
                <button
                  onClick={() => {
                    handelCart(book[0]);
                  }}
                >
                  🛒
                </button>
                <button
                  onClick={() => {
                    handleWish(book[0]);
                  }}
                >
                  ♥
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookItem;
