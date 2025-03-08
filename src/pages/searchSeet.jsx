import { useContext } from "react";
import data from "../utils";
import { BookContext } from "../component/App";

//passing search state in this component
export default function SearchSeet() {
  const { search } = useContext(BookContext);

  console.log(data.books);
  return (
    <>
      <h1>{search}</h1>
      <h1>this contain a search result </h1>

      <div id="result-container " className="m-20 h-80"></div>
    </>
  );
}
