import { useContext } from "react";
import Footer from "../component/footer/footer";
import { BookContext } from "../component/App";
import NavSub from "../component/navbar/navigation";

function WishlistBook() {
  const { wish, handleDelete } = useContext(BookContext);
  console.log(wish);
  //const[]

  return (
    <ul>
      {wish.map((book) => (
        <>
          <li key={book.id} className="h-auto m-4">
            <img className=" w-32 h-48" src={book.cover} alt="" />
            <h1>{book.title}</h1>
            <h1>{book.author}</h1>
            <h1>Rp.{book["price"].toLocaleString()}</h1>
            <h1>{book.year}</h1>
            <h1>Shared this item ?</h1>

            <button
              onClick={() => {
                handleEdite(book.id);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                handleDelete(book.id);
              }}
            >
              Delete
            </button>
          </li>
        </>
      ))}
    </ul>
  );
}

function WishListInside() {
  console.log("hehheheheh");
  return (
    <div className="pt-[9.5rem]">
      <NavSub title={"Wish List"} />
      <div id="background" className="bg-white  h-auto block">
        <div
          id="title-container"
          className="bg-white w-3/4 m-5 inline-block h-40"
        >
          My Wish List
        </div>
        <div id="input-container" className="w-3/4 m-5 inline-block h-auto p-5">
          <input
            type="form"
            maxLength={20}
            className="m-2"
            placeholder="Enter name or e-mail"
          ></input>
          <button className="bg-blue-700">GO</button>
          <h3>Find someone's Wish List</h3>
        </div>
        <div id="item-container" className="w-3/4 m-5 h-auto inline-block">
          <WishlistBook />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default WishListInside;
