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
    <div className="flex flex-direction:row border border-white rounded-md h-14 overflow-hidden my-auto mx-5">
      <select
        className="bg-white px-4 text-center border border-r-gray-400"
        name="filter-category"
        id=""
      >
        <option value="0">All Category</option>
        <option value="1">fiction</option>
        <option value="2">business</option>
        <option value="3">self development</option>
        <option value="4">parenting</option>
      </select>
      <div className="input">
        <form onSubmit={handleClick}>
          <input className="h-14 w-80" type="text" onChange={handleChange} />
          <button type="submit" className="text-4xl px-4">
            🔍
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
