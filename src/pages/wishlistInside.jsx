import { useContext } from "react";
import Footer from "../component/footer/footer";
import { BookContext } from "../component/App";
import NavSub from "../component/navbar/navigation";

function WishlistBook() {
  const { wish, handleDelete } = useContext(BookContext);
  console.log(wish.length);
  //const[]

  return (
    <ul className="p-8 flex flex-col gap-2 ">
      {wish.map((book) => (
        <>
          <li
            key={book.id}
            className="h-auto m-7  flex flex-row border-b-2 border-gray-300"
          >
            <img
              className="  h-56 inline mx-6 shadow-xl"
              src={book.cover}
              alt=""
            />
            <div className="inline-block w-full p-6">
              <h1 className="text-2xl font-semibold my-2">{book.title}</h1>
              <h2 className="text-xl font-semibold italic text-gray-500 my-1">
                Paperback
              </h2>
              <h1 className="font-semibold text-blue-700 text-xl">
                {book.author}
              </h1>
              <h1 className="text-red-600 font-semibold text-xl">
                Rp. {book["price"].toLocaleString()}
              </h1>

              <h1 className="text-2xl py-6">Shared this item ?</h1>
              <div className="py-2">
                <button
                  className="text-2xl py-2 px-5"
                  onClick={() => {
                    handleEdite(book.id);
                  }}
                >
                  EDIT
                </button>

                <button
                  className="bg-gray-700 px-5 py-2 font-semibold text-white text-2xl hover:bg-orange-400"
                  onClick={() => {
                    handleDelete(book.id);
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
}

function WishListInside() {
  const { wish } = useContext(BookContext);

  return (
    <div className="pt-[7.2rem] lg:pt-[6.8rem]">
      <NavSub title={"Wish List"} />
      <div id="background" className="  h-auto w-[85%] mx-auto mt-10 ">
        <div
          id="title-container"
          className="bg-white w-full  inline-block h-auto shadow-md text-xl font-bold text-gray-600 p-10 rounded"
        >
          <h1>My Wish List</h1>
        </div>
        <div className="w-full my-5 bg-white inline-block h-auto p-10 text-sm shadow-md rounded">
          <input
            type="form"
            maxLength={20}
            className=" h-8 border-gray-300 border-2  my-2 px-4 rounded "
            placeholder="Enter name or e-mail"
          ></input>
          <button className="bg-blue-700 w-40 text-white h-8 mx-1 rounded ">
            GO!
          </button>
          <h3 className="text-gray-500 font-semibold">
            Find someone's Wish List
          </h3>
        </div>
        <div
          id="item-container"
          className="w-full bg-white shadow-md my-5 h-auto inline-block rounded"
        >
          {wish.length == 0 ? <></> : <WishlistBook />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default WishListInside;
