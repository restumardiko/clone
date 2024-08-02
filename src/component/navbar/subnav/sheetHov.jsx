function SheetHov({ list }) {
  console.log(list);
  const ls = list.map((yea) => <li>{yea}</li>);
  return (
    <div className="absolute bg-white top-50 group-hover:block hidden -z-10 ">
      <ul>{ls}</ul>
    </div>
  );
}

export default SheetHov;
