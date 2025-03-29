import { useContext, useState } from "react";
import { BookContext } from "../App";

//import Categories from "./categories";

function Input() {
  const { handleChange } = useContext(BookContext);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(search === "");
    // navigate("/search", { replace: true });

    // handle(search);
  };
  return (
    <div className="flex items-center border border-white rounded-md h-14 overflow-hidden my-auto mx-5">
      <select
        className="bg-white px-4 text-center border border-r-gray-400 h-full"
        name="filter-category"
      >
        <option value="0">All Category</option>
        <option value="1">fiction</option>
        <option value="2">business</option>
        <option value="3">self development</option>
        <option value="4">parenting</option>
      </select>
      <form onSubmit={handleClick} className="flex w-full">
        <input className="h-14 w-96 px-4" type="text" onChange={handleChange} />
        <button type="submit" className="p-2 hover:bg-orange-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Input;
