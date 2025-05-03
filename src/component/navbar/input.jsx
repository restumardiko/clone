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
    <div className="flex lg:absolute lg:top-4 lg:left-[22rem]  items-center border border-white rounded-md w-full h-12 lg:h-10  overflow-hidden lg:w-[40%]  mx-auto">
      <select
        className="lg:block hidden bg-white lg:px-2 text-center border border-r-gray-300 h-full lg:text-sm lg:text-gray-500 "
        name="filter-category"
      >
        <option value="0">All Category</option>
        <option value="1">fiction</option>
        <option value="2">business</option>
        <option value="3">self development</option>
        <option value="4">parenting</option>
      </select>
      <form onSubmit={handleClick} className="flex flex-row lg:w-full w-full">
        <input
          className="h-14 w-[85%]  lg:w-92 px-8 text-gray-600 text-xl lg:text-sm"
          type="text"
          required
          onChange={handleChange}
          placeholder="search by title / author / ISBN"
        />
        <button
          type="submit"
          className="p-2 w-10  lg:w-16   hover:bg-orange-400 mx-auto lg:mx-0 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="lg:size-6 size-7 lg:mx-auto"
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
