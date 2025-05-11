import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BookContext } from "../component/App";
import Footer from "../component/footer/footer";

export default function SingleBookInside() {
  const { handleBuyNow, handelCart, handelWish } = useContext(BookContext);
  const location = useLocation();
  console.log(location);
  const book = location.state;
  return (
    <div id="background" className="pt-40 ">
      <div
        id="book_container"
        className="w-[85%] bg-white mb-8 mx-auto flex p-4 rounded-md mt-8"
      >
        <div className=" w-[30%] ">
          <img className="w-96 mx-auto my-10" src={book.cover} alt="" />
        </div>
        <div className="w-[45%] p-10">
          <h1 className="text-4xl font-bold py-8 ">{book.title}</h1>
          <h1 className="text-2xl font-semibold py-4">{book.author}</h1>
          <h1 className="text-3xl font-semibold text-red-700 py-4">
            Rp.{book["price"].toLocaleString()}
          </h1>
          <h1 className="text-2xl font-semibold py-4">{book.year}</h1>
          <h2 className="text-2xl font-semibold text-gray-600 py-4">
            In Stock
          </h2>
        </div>

        <div className="shipping w-[28%] flex flex-col justify-between m-5 ">
          <div className="m-4 rounded-md bg-slate-100 ">
            <div className=" flex flex-row m-6">
              <div className="plane my-auto ">
                <img className="w-28 my-auto" src="./src/plane.png" alt="" />
              </div>
              <div className="m-4 ml-2 text-center ">
                <h1 className="text-3xl font-bold">Free Shipping</h1>
                <h3 className="">Terms and Conditions</h3>
              </div>
            </div>
            <div className="deliv block m-4 text-center text-2xl">
              <h3 className="my-2">Delivered In :</h3>
              <h4 className="font-bold">1-3 Business days (Jakarta)</h4>
              <h4 className="font-bold">3-7 Business days (Other)</h4>
            </div>
            <div className=" m-8 ">
              <div className="w-full px-16 ">
                <button
                  onClick={() => handelCart(book)}
                  className="rounded-lg bg-blue-500 w-full p-2  text-center text-xl text-white font-semibold my-2"
                >
                  ADD TO CHART
                </button>
              </div>
              <div onClick={() => handelWish(book)} className="w-full px-16 ">
                <button className="rounded-lg bg-gray-500 w-full p-2  text-center text-xl text-white font-semibold my-2 ">
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
            {/* <button onClick={() => handleBuyNow(book)}>Buy Now</button>
            <button onClick={() => handelCart(book)}>🛒</button>
            <button onClick={() => handelWish(book)}>♥</button> */}
          </div>
          <div className="flex justify-center">
            <h4 className="text-2xl"> Share :</h4>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook-icon lucide-facebook size-6 m-2"
              >
                <title>facebook</title>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" lucide-twitter inline-block size-6 m-2 "
              >
                <title>twitter</title>
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="m-2 size-6"
              >
                <title>mail</title>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                width="25"
                height="25"
                stroke=""
                className=" m-2 size-6"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
