import ActThrough from "./actthrough";

function BookItem({ data, sheetName }) {
  return (
    <div>
      <h2>{sheetName}</h2>
      <ul>
        {data.map((book) => {
          return (
            <li key={book.id}>
              <h1>{book.title}</h1>
              <ActThrough />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookItem;
