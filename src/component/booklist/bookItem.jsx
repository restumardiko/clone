import ActThrough from "./actthrough";

function BookItem({ data }) {
  return (
    <div>
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
