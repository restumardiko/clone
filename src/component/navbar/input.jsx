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
    <div>
      {/* <Categories /> */}
      <div className="input">
        <form onSubmit={handleClick}>
          <input type="text" onChange={handleChange} />
          <button type="submit">CARI</button>
        </form>
      </div>
    </div>
  );
}

export default Input;
