import ActThrough from "./actthrough";

function BookItem({ data, hem }) {
  console.log(hem);
  return (
    <div className="flex h-auto w-2/3 overflow-hidden justify-center  ">
      <ul
        id="slide-left"
        className="flex flex-row  flex-grow justify-center h-auto"
      >
        {data.map((book) => (
          <li
            style={{
              transform: `translateX(-${hem * 100}%)`,
            }}
            className=" w-60 h-auto  text-xl p-6 transition duration-1000"
            key={book[0].id}
          >
            <img className=" w-32 h-48" src={book[0].cover} alt="" />
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
