import SheetHov from "./sheetHov";

function BargainBooks() {
  return (
    <div
      id="Bargain"
      className="px-5 hover:text-white h-full  text-center group hover:bg-red-700 z-20"
    >
      <button className="h-full">
        <h2>Bargain Books</h2>
      </button>
      <SheetHov
        list={["under Rp. 50,000", "Rp. 50,000 - 100,000", "above 100,000"]}
      />
    </div>
  );
}

export default BargainBooks;
