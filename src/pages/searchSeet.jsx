import { useContext } from "react";
import data from "../utils";
import { BookContext } from "../component/App";
import BookItem from "../component/booklist/bookItem";

//passing search state in this component
export default function SearchSeet() {
  const { handleBuyNow, search } = useContext(BookContext);

  console.log(data["books"]);
  console.log(search);
  const datas = data.books.filter((data) => {
    return data.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h1>{search}</h1>
      <h1>this contain a search result </h1>

      <div id="result-container " className="m-20 h-80">
        <BookItem
          data={datas}
          hem={0}
          handleBuyNow={handleBuyNow}
          spread={"View Less"}
        />
      </div>
    </>
  );
}
