import { useContext } from "react";
import NavSub from "../component/navbar/navigation";
import { BookContext } from "../component/App";

export default function BuyNow() {
  const { buy } = useContext(BookContext);
  console.log(buy);
  return (
    <>
      <NavSub title={"Buy Now"} />
      <div id="book_detail">
        <div id="bg">
          <div id="container_book" className="m-20">
            <img src={buy.cover} alt="" />
            <h1>{buy.title}</h1>
            <h1>{buy.author}</h1>
            <h1>{buy.year}</h1>
            <h1>{buy.price}</h1>
          </div>
          <div id="button">
            <div id="sum"></div>
          </div>
        </div>
      </div>
    </>
  );
}
