import ActThrough from "./actthrough";

function BookItem({ data }) {
  console.log(data);
  return (
    <div>
      {/* <h1>{data}</h1> */}
      {/* <ul>
        {data.map((book) => {
          return (
            <li key={book.id}>
              <h1>{book.title}</h1>
              <ActThrough />
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default BookItem;
