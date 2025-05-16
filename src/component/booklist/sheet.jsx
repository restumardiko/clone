import { useEffect, useRef, useState } from "react";
import BookItem from "./bookItem";

function Sheet({ datas, sheetName, handleBuyNow, onViewMore, spread }) {
  // console.log(datas.books);
  // console.log(spread);
  let isSpread = spread === "View More" ? false : true;

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isRunning, setIsRunning] = useState(true);
  const interv = useRef(null);
  function fStopRunning() {
    // console.log(interv.current);
    // console.log("starting stop");
    clearInterval(interv.current);
    interv.current = null;
    // setIsRunning(false);
  }

  const fStartRunning = () => {
    console.log(interv.current);
    if (isSpread) {
      return;
    } else {
      console.log("starting scroll");
      if (interv.current === null) {
        interv.current = setInterval(() => {
          setCurrentIndex((prev) =>
            prev === datas.books.length ? -6 : prev + 1
          );
        }, 2000);
        //setIsRunning(true);
      }
    }
  };

  useEffect(() => {
    interv.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === datas.books.length ? -6 : prev + 1));
    }, 2000);
    //setIsRunning(true);
    return () => clearInterval(interv.current); // Clear interval when component unmounts
  }, [datas.books]);

  const fSpread = (e) => {
    fStopRunning();
    // console.log("mas");
    onViewMore(e);
  };

  const handlePrev = () => {
    fStopRunning();
    fStartRunning();
    //e.preventDefault();

    setCurrentIndex((prev) => {
      if (prev === -6) {
        return datas.books.length;
      } else {
        return prev - 1;
      }
    });
  };
  const handleNext = () => {
    fStopRunning();
    fStartRunning();
    // e.preventDefault();

    setCurrentIndex((prev) => (prev === datas.books.length ? -6 : prev + 1));
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
  // console.log(dat);
  // console.log(datas);

  return (
    <>
      <div className="flex shadow-md flex-col mb-5 pt-10 lg:m-5   lg:mx-28 bg-white lg:h-auto lg:items-center lg:px-8 lg:pt-8 lg:pb-4">
        <div className=" justify-center h-20 ">
          <h1 className=" text-gray-700 text-center font-bold  text-xl  ">
            {sheetName}
          </h1>
          <div className="w-16 mx-auto mt-3  h-[0.10rem] bg-red-700"></div>
        </div>

        <BookItem
          data={dat}
          hem={currentIndex}
          handleBuyNow={handleBuyNow}
          spread={spread}
          fStopRunning={fStopRunning}
          fStartRunning={fStartRunning}
        />

        <div className="flex justify-center h-0 flex-row w-[100%] ">
          <button
            onClick={handlePrev}
            onMouseEnter={() => fStopRunning()}
            onMouseLeave={() => fStartRunning()}
            className={
              isSpread
                ? "hidden"
                : "lg:inline  w-10 h-10 rounded-full shadow-md text-gray-700 border-gray-200 border-solid border relative -top-40 lg:left-[-50%] left-[-40%] -translate-y-1/2 text-5xl  bg-white "
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-7 mx-auto"
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
            onMouseEnter={() => fStopRunning()}
            onMouseLeave={() => fStartRunning()}
            className={
              isSpread
                ? "hidden"
                : "lg:inline  w-10 h-10 rounded-full relative shadow-md text-gray-700 border-gray-200 border-solid border  -top-40 lg:left-[50%] left-[40%] text-5xl -translate-y-1/2  bg-white"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-7 m-auto"
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
            onClick={(e) => fSpread(e)}
            className="w-32 h-8 m-4 rounded-full bg-red-600 text-white font-semibold text-sm "
          >
            {spread}
          </button>
        </div>
      </div>
    </>
  );
}

export default Sheet;
