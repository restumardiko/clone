import SheetHov from "./sheetHov";

function Categories() {
  return (
    <>
      <h2 className="">Categories</h2>
      <div id="fly-sheet">
        <SheetHov list={["satu", "dua", "tiga"]} />
      </div>
    </>
  );
}

export default Categories;
