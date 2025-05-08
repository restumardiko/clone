function SheetHov({ list }) {
  console.log(list);
  const ls = list.map((yea) => (
    // eslint-disable-next-line react/jsx-key
    <li className="lg:hover:bg-red-700 lg:w-full ">
      <button className="lg:p-3 lg:hover:text-white">{yea}</button>
    </li>
  ));
  return (
    <div className="lg:absolute lg:-ml-5  shadow-md lg:p-3 bg-white text-black lg:top-[6.9rem] lg:text-left group-hover:block hidden z-10 ">
      <ul className="">{ls}</ul>
    </div>
  );
}

export default SheetHov;
