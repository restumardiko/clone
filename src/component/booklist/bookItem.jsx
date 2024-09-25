function BookItem({ data, sheetName }) {
  function ActThrough() {
    return (
      <div>
        <h1>Buy Now</h1>
        <h1>cart</h1>
        <h1>wishlist</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <h2>{sheetName}</h2>
        <ul>
          {data.books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>
                by {book.author} ({book.year})
              </p>
              <img
                src={book.cover}
                alt={book.title}
                style={{ width: "150px", height: "200px" }}
              />
            </li>
          ))}
        </ul>
      </div>

      <ActThrough />
    </>
  );
}

export default BookItem;
