function SheetHov({ list }) {
  console.log(list);
  const ls = list.map((yea) => (
    // eslint-disable-next-line react/jsx-key
    <li className="hover:bg-red-700 w-full ">
      <button className="p-3 hover:text-white">{yea}</button>
    </li>
  ));
  return (
    <div className="absolute -ml-5 shadow-md p-3 bg-white text-black  top-[9.5rem] text-left group-hover:block hidden z-10  ">
      <ul className="">{ls}</ul>
    </div>
  );
}

export default SheetHov;
