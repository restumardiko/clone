import SheetHov from "./sheetHov";

function Categories() {
  return (
    <div
      id="categories "
      className="px-4 hover:text-white h-full w-36 text-center group hover:bg-red-700 z-20 "
    >
      <button className="h-full">
        <h2 className="">Categories</h2>
      </button>

      <SheetHov
        list={["fiction", "business", "self development", "parenting"]}
      />
    </div>
  );
}

export default Categories;
