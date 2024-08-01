function SheetHov({ list }) {
  console.log(list);
  const ls = list.map((yea) => <li>{yea}</li>);
  return (
    <div className="">
      <ul>{ls}</ul>
    </div>
  );
}

export default SheetHov;
