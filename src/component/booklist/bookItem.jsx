import ActThrough from "./actthrough";

function BookItem({ data }) {
  return (
    <div className="flex bg-red-400 h-auto w-2/3 overflow-hidden justify-center ">
      <ul className="flex flex-row flex-grow justify-center h-auto">
        {data.map((book) => (
          <li className=" w-60 h-auto  text-xl m-12" key={book[0].id}>
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
