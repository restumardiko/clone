import { useEffect, useState } from "react";
import BookItem from "./bookItem";

function Sheet({ datas, sheetName, handleBuyNow, onViewMore, spread }) {
  console.log(spread);
  let isSpread = spread === "View More" ? true : false;

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === datas.books.length - 1 ? 0 : prev + 1
      );
    }, 100000);
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [datas.books]);
  const handlePrev = () => {
    //e.preventDefault();

    setCurrentIndex((prev) => {
      if (prev === 0) {
        return datas.books.length - 1;
      } else {
        return prev - 1;
      }
    });
  };
  const handleNext = () => {
    // e.preventDefault();

    setCurrentIndex((prev) => (prev === datas.books.length - 1 ? 0 : prev + 1));
  };
  let dat = [];
  if (sheetName === "New Release") {
    datas.categories.bestSeller.forEach((element) => {
      const [daat] = datas.books.filter((book) => book.id === element);
      return dat.push(daat);
    });

    // datas.categories.newRelease.forEach((element) => {
    //   return dat.push(datas.books.filter((book) => book.id === element));
    // });
  } else if (sheetName === "Most Wished") {
    datas.categories.bestSeller.forEach((element) => {
      const [daat] = datas.books.filter((book) => book.id === element);
      return dat.push(daat);
      // datas.categories.mostWished.forEach((element) => {
      //   return dat.push(datas.books.filter((book) => book.id === element));
    });
  } else if (sheetName === "Best Seller") {
    datas.categories.bestSeller.forEach((element) => {
      const [daat] = datas.books.filter((book) => book.id === element);
      return dat.push(daat);
    });
  }
  console.log(dat);
  console.log(datas);

  return (
    <>
      <div className="flex shadow-md flex-col m-16 mx-40 bg-white h-auto items-center px-8 pt-8 pb-4">
        <div className=" justify-center h-20 ">
          <b className=" text-gray-700 text-5xl">{sheetName}</b>
          <div className="w-24 mx-auto my-6 h-1 bg-red-700"></div>
        </div>

        <BookItem
          data={dat}
          hem={currentIndex}
          handleBuyNow={handleBuyNow}
          spread={spread}
        />

        <div className="flex justify-center h-0 flex-row w-[100%] ">
          <button
            onClick={handlePrev}
            className={
              isSpread
                ? "inline w-20 h-20 rounded-full shadow-md border-gray-200 border-solid border relative -top-60 left-[-47%] -translate-y-1/2 text-5xl pb-2 bg-white "
                : "hidden"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={
              isSpread
                ? "inline w-20 h-20 rounded-full relative shadow-md border-gray-200 border-solid border  -top-60 left-[47%] text-5xl -translate-y-1/2 pb-2 bg-white"
                : "hidden"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center">
          <button
            id={sheetName}
            onClick={onViewMore}
            className="w-36 h-12 m-4 rounded-full bg-red-600 text-white font-bold text-xl "
          >
            {spread}
          </button>
        </div>
      </div>
    </>
  );
}

export default Sheet;
