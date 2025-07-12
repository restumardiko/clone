import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BookContext } from "../component/App";
import Footer from "../component/footer/footer";

export default function SingleBookInside() {
  const { handleBuyNow, handelCart, handelWish } = useContext(BookContext);
  const location = useLocation();
  //console.log(location);
  const book = location.state;
  return (
    <div id="background" className="pt-36 ">
      <div
        id="book_container"
        className="w-[95%] lg:w-[85%] bg-white mb-8 mx-auto flex md:flex-row flex-col p-4 rounded-md text-gray-500 justify-between"
      >
        <div className=" w-[50%] md:w-[20%] mx-auto md:mx-8 ">
          <img className="my-8 mx-auto " src={book.cover} alt="" />
        </div>
        <div className=" p-4 flex flex-col gap-2 md:w-[40%]">
          <h1 className="text-[1.2rem] pb-1 lg:text-2xl text-gray-700 font-semibold ">
            {book.title}
          </h1>
          <div className="w-full h-[0.07rem] bg-gray-300 "></div>
          <h2 className="text-sm  text-gray-500">Hardcover</h2>
          <h2 className="text-sm font-semibold ">{book.author}</h2>
          <h2 className="text-base font-semibold text-red-700 ">
            Rp.{book["price"].toLocaleString()}
          </h2>
          <h2 className="text-sm font-semibold ">{book.year}</h2>
          <h2 className="text-sm font-semibold text-gray-600 ">In Stock</h2>
        </div>

        <div className="shipping flex md:py-4  flex-col md:justify-between lg:items-center md:w-[30%]  ">
          <div className="m-4 md:m-0 rounded-md bg-slate-100 w-[80%] md:w-full lg:w-[75%] py-4 mx-auto">
            <div className=" flex flex-row justify-center py-4">
              <img className=" my-auto" src="./plane.webp" alt="" />

              <div className=" ml-2 text-center ">
                <h1 className="text-lg font-semibold">Free Shipping</h1>
                <h3 className="text-[0.6rem]">*Terms and Conditions</h3>
              </div>
            </div>
            <div className="deliv flex flex-col gap-2 text-center text-gray-700 text-xs">
              <h3 className="">Delivered In :</h3>
              <h4 className="font-bold">1-3 Business days (Jakarta)</h4>
              <h4 className="font-bold">3-7 Business days (Other)</h4>
            </div>
            <div className="flex flex-col items-center  ">
              <button
                onClick={() => handelCart(book)}
                className="rounded-lg bg-blue-700 w-32 p-2  text-center text-[0.7rem] text-white font-bold my-2 lg:hover:bg-orange-500"
              >
                ADD TO CART
              </button>

              <button
                onClick={() => handelWish(book)}
                className="rounded-lg bg-gray-300 w-32 p-2  text-center text-[0.7rem] text-gray-700 lg:hover:text-white font-bold my-2 lg:hover:bg-orange-500   "
              >
                ADD TO WISHLIST
              </button>

              <button
                onClick={() => handleBuyNow(book)}
                className="rounded-lg bg-red-600 w-32 p-2  text-center text-[0.7rem] text-white font-bold my-2 lg:hidden "
              >
                BUY NOW
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <h4 className="text-sm my-auto"> Share :</h4>
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
                className="lucide lucide-facebook-icon lucide-facebook size-4 m-2"
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
                className=" lucide-twitter inline-block size-4 m-2 "
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
                className="m-2 size-4"
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
                fill="currentColor"
                width="25"
                height="25"
                stroke=""
                className=" m-2 size-4"
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
