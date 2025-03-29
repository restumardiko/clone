import SheetHov from "./sheetHov";

function Categories() {
  return (
    <div id="categories " className="mx-4 group hover:bg-red-500 ">
      <button className="">
        <h2 className="">Categories</h2>
      </button>

      <SheetHov
        list={["fiction", "business", "self development", "parenting"]}
      />
    </div>
  );
}

export default Categories;
