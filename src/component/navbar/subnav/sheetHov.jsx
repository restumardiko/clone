function SheetHov({ list }) {
  console.log(list);
  const ls = list.map((yea) => <li className="hover:bg-red-500">{yea}</li>);
  return (
    <div className="absolute bg-white top-50 group-hover:block hidden -z-10  ">
      <ul className="">{ls}</ul>
    </div>
  );
}

export default SheetHov;
