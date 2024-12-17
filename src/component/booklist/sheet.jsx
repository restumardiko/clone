import BookItem from "./bookItem";

// eslint-disable-next-line react/prop-types
function Sheet({ datas, sheetName }) {
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
      <div className="flex flex-col m-16 bg-gray-200 h-auto">
        <h1 className="flex justify-center text-6xl">{sheetName}</h1>
        {/* <div className="flex flex-row justify-center"> */}
        <BookItem data={dat} />
        {/* </div> */}

        <div className="flex justify-center">
          <button className="inline w-20 h-20">R</button>
          <button className="inline w-20 h-20">L</button>
        </div>
        <button className="inline w-40 h-20">VIEW MORE</button>
      </div>
    </>
  );
}

export default Sheet;
