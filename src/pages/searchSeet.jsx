import { useContext } from "react";
import data from "../utils";
import { BookContext } from "../component/App";
import BookItem from "../component/booklist/bookItem";
import Footer from "../component/footer/footer";

//passing search state in this component
export default function SearchSeet() {
  const { handleBuyNow, search } = useContext(BookContext);

  // console.log(data["books"]);
  // console.log(search);
  const datas = data.books.filter((data) => {
    return data.title.toLowerCase().includes(search.toLowerCase());
  });
  const fStartRunning = () => {
    return;
  };
  const fStopRunning = () => {
    return;
  };

  return (
    <div className="pt-[9rem] ">
      <div
        id="result-container "
        className="w-[85%] mx-auto mb-8 bg-white p-10 rounded-lg shadow-md min-h-96"
      >
        {datas.length !== 0 ? (
          <BookItem
            data={datas}
            hem={0}
            handleBuyNow={handleBuyNow}
            spread={"View Less"}
            fStartRunning={fStartRunning}
            fStopRunning={fStopRunning}
          />
        ) : (
          <div className="text-3xl font-bold text-gray-500">
            The book you're looking for is not available
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
