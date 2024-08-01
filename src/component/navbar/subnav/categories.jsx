import SheetHov from "./sheetHov";

function Categories() {
  return (
    <div id="categories " className="mx-4">
      <button>
        <h2 className="">Categories</h2>
      </button>
      <div
        id="fly-sheet"
        className="absolute bg-white top-52 -z-10 visible hover:bg-black "
      >
        <SheetHov
          list={["fiction", "business", "self development", "parenting"]}
        />
      </div>
    </div>
  );
}

export default Categories;
