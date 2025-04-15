import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BookContext } from "../component/App";

export default function SingleBookInside() {
  const { handleBuyNow, handelCart, handelWish } = useContext(BookContext);
  const location = useLocation();
  console.log(location);
  const book = location.state;
  return (
    <div id="background">
      <div id="book_container" className="pt-40">
        <img src={book.cover} alt="" />
        <h1>{book.title}</h1>
        <h1>{book.author}</h1>
        <h1>{book.year}</h1>
        <h1>{book.price}</h1>
        <div id="button"></div>
        <button onClick={() => handleBuyNow(book)}>Buy Now</button>
        <button onClick={() => handelCart(book)}>🛒</button>
        <button onClick={() => handelWish(book)}>♥</button>
      </div>
    </div>
  );
}
