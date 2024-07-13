import BookItem from "./bookItem";

// eslint-disable-next-line react/prop-types
function Sheet({ sheetName }) {
  return (
    <>
      <div className="min h-28">
        <h1>{sheetName}</h1>
        <BookItem />
      </div>
    </>
  );
}

export default Sheet;
