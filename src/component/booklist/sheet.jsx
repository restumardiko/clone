import BookItem from "./bookItem";

// eslint-disable-next-line react/prop-types
function Sheet(props) {
  return (
    <>
      <div className="m-16 bg-gray-200">
        <h1>{props.sheetName}</h1>
        <button>LEFT</button>
        <BookItem data={props.data} />
        <button>right</button>
        <button>VIEW MORE</button>
      </div>
    </>
  );
}

export default Sheet;
