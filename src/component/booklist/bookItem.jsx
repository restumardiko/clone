import ActThrough from "./actthrough";

function BookItem({ data }) {
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((book) => (
          <li key={book[0].id}>
            <h1>{book[0].title}</h1>
            <h1>{book[0].author}</h1>
            <ActThrough />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookItem;
