import BookItem from "./bookItem";

// eslint-disable-next-line react/prop-types
function Sheet({ datas, sheetName }) {
  console.log(datas.books[0]);
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
    console.log("aw");
    datas.categories.bestSeller.forEach((element) => {
      return dat.push(datas.books.filter((book) => book.id === element));
    });
  }
  return (
    <>
      <div className="m-16 bg-gray-200">
        <h1>{sheetName}</h1>
        <button>LEFT</button>
        <BookItem data={dat} />
        <button>right</button>
        <button>VIEW MORE</button>
      </div>
    </>
  );
}

export default Sheet;
