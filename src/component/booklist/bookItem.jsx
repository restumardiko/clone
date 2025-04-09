import { useContext } from "react";
import { BookContext } from "../App";
import { useNavigate } from "react-router-dom";

function BookItem({ data, hem, spread }) {
  const { handelCart, handleBuyNow, handelWish } = useContext(BookContext);
  const navigate = useNavigate();
  function handelSingleBook(param) {
    console.log(param);
    navigate("/book_detail", { state: param });
  }

  let isSpread = spread === "View More" ? false : true;
  console.log(spread);
  console.log(hem);
  console.log(isSpread);
  console.log(data);

  return (
    <div
      className={
        isSpread
          ? "flex h-auto w-[98%]  justify-center"
          : "flex h-[30rem] w-[98%] overflow-hidden justify-center"
      }
    >
      <ul
        className={
          isSpread
            ? "gap-2 flex-row flex flex-wrap justify-center h-auto"
            : "flex flex-row  justify-center h-auto"
        }
      >
        {data.map((book) => (
          <li
            style={!isSpread ? { transform: `translateX(-${hem * 100}%)` } : {}}
            className="px-8 pt-8 transition duration-2000  w-[18%] h-[29rem]  "
            key={book.id}
          >
            <div
              id="single-book"
              className="group w-60 h-full  text-xl overflow-hidden "
            >
              <img
                onClick={() => {
                  handelSingleBook(book);
                }}
                className=" w-44 mx-auto"
                src={book.cover}
                alt=""
              />
              <div className="mx-3">
                <h4 className="text-gray-600 font-bold ">{book.title}</h4>
                <h4 className="text-blue-600 font-semibold">{book.author}</h4>
                <h4 className="text-gray-500"> Paperback</h4>

                <h4 className="font-bold text-2xl text-gray-700">
                  Rp.{book["price"].toLocaleString()}
                </h4>
              </div>

              <div className="mt-36 group-hover:mt-2 ease-in duration-300 text-red-600 text-2xl font-bold ">
                <button
                  className="border-r-2 border-solid  px-4"
                  onClick={() => {
                    handleBuyNow(book);
                  }}
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    handelCart(book);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 -mb-2 mx-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    handelWish(book);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 -mb-2 mx-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
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
