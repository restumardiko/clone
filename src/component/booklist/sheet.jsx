import BookItem from "./bookItem";

// eslint-disable-next-line react/prop-types
function Sheet({ sheetName }) {
  return (
    <>
      <div className="m-16">
        <h1>{sheetName}</h1>
        <button>LEFT</button>
        <BookItem />
        <button>right</button>
        <button>VIEW MORE</button>
      </div>
    </>
  );
}

export default Sheet;
