import { useState } from "react";
import BookItem from "./bookItem";

// eslint-disable-next-line react/prop-types

const onViewMore = () => {
  console.log("iclik mas view more");
};
function Sheet({ datas, sheetName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e) => {
    e.preventDefault();
    console.log("iclik mas sng kiwa");
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return datas.books.length - 1;
      } else {
        prev - 1;
      }
    });
  };
  const handleNext = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("iclik mas tengen");
    setCurrentIndex((prev) => (prev === datas.books.length - 1 ? 0 : prev + 1));
  };
  let dat = [];
  if (sheetName === "New Release") {
    datas.categories.newRelease.forEach((element) => {
      return dat.push(datas.books.filter((book) => book.id === element));
    });
  } else if (sheetName === "Most Wished") {
    datas.categories.mostWished.forEach((element) => {
      return dat.push(datas.books.filter((book) => book.id === element));
    });
  } else if (sheetName === "Best Seller") {
    datas.categories.bestSeller.forEach((element) => {
      return dat.push(datas.books.filter((book) => book.id === element));
    });
  }
  return (
    <>
      <div className="flex   flex-col m-16 bg-gray-200 h-auto items-center ">
        <div className="flex justify-center h-20 ">
          <h1 className="  text-6xl">{sheetName}</h1>
        </div>

        <BookItem data={dat} hem={currentIndex} />

        <div className="flex justify-center flex-row w-[100%]">
          <button
            onClick={handlePrev}
            className="inline w-20 h-20 rounded-full relative -top-60 left-[-40%] -translate-y-1/2 text-5xl pb-2 bg-white"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="inline w-20 h-20 rounded-full relative -top-60 left-[40%] text-5xl -translate-y-1/2 pb-2 bg-white"
          >
            {">"}
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onViewMore}
            className="w-36 h-12 m-4 rounded-full bg-red-600 text-white "
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default Sheet;
