import { useContext } from "react";
import { BookContext } from "../App";

function BookItem({ data, hem, spread }) {
  const { handelCart, handleBuyNow, handelWish } = useContext(BookContext);

  let isSpread = spread === "View More" ? true : false;
  console.log(spread);
  console.log(hem);
  console.log(isSpread);
  console.log(data);
  //this code for div
  // flex h-auto w-2/3 overflow-hidden justify-center
  //the code below for ul
  // flex flex-row  flex-grow justify-center h-auto

  //this code for div viewmore
  //flex h-auto w-2/3  justify-center
  //this code for ul
  //gap-2 flex-row flex flex-wrap justify-center h-auto

  return (
    <div
      className={
        isSpread
          ? "flex h-auto w-2/3 overflow-hidden justify-center"
          : "flex h-auto w-2/3  justify-center"
      }
    >
      <ul
        className={
          isSpread
            ? "flex flex-row  flex-grow justify-center h-auto"
            : "gap-2 flex-row flex flex-wrap justify-center h-auto"
        }
      >
        {data.map((book) => (
          <li
            style={{
              transform: `translateX(-${hem * 100}%)`,
            }}
            className="p-8 transition duration-1000  w-[18%] "
            key={book.id}
          >
            <div
              id="single-book"
              className="group w-60 h-96  text-xl overflow-hidden "
            >
              <img className=" w-32 h-48" src={book.cover} alt="" />
              <h1>{book.title}</h1>
              <h1>{book.author}</h1>

              <h2>Rp.{book["price"].toLocaleString()}</h2>
              <h2>{book.year}</h2>
              <div className="mt-40 group-hover:mt-2 ease-in duration-300 ">
                <button
                  onClick={() => {
                    handleBuyNow(book);
                  }}
                >
                  BuyNow
                </button>
                <button
                  onClick={() => {
                    handelCart(book);
                  }}
                >
                  🛒
                </button>
                <button
                  onClick={() => {
                    handelWish(book);
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
