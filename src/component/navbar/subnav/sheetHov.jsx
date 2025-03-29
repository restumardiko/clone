function SheetHov({ list }) {
  console.log(list);
  const ls = list.map((yea) => (
    // eslint-disable-next-line react/jsx-key
    <li className="hover:bg-red-500">
      <button>{yea}</button>
    </li>
  ));
  return (
    <div className="absolute bg-white text-black top-40 text-left group-hover:block hidden z-10  ">
      <ul className="">{ls}</ul>
    </div>
  );
}

export default SheetHov;
