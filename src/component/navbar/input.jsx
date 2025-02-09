import { useState } from "react";
//import Categories from "./categories";

function Input() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(search);
    // handle(search);
  };
  return (
    <div className="flex flex-direction:row mx-20 my-10">
      <select name="filter-category" id="">
        <option value="0">All Category</option>
        <option value="1">fiction</option>
        <option value="2">business</option>
        <option value="3">self development</option>
        <option value="4">parenting</option>
        {/* <option value="3">Toys</option> */}
      </select>
      <div className="input">
        <form onSubmit={handleClick}>
          <input className="h-14 w-80" type="text" onChange={handleChange} />
          <button type="submit" className="text-4xl">
            🔍
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
