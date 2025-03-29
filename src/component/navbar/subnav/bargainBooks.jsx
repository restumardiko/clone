import SheetHov from "./sheetHov";

function BargainBooks() {
  return (
    <div id="Bargain" className="mx-4 group hover:bg-red-500">
      <button>
        <h2>Bargain Books</h2>
      </button>
      <SheetHov
        list={["under Rp. 50,000", "Rp. 50,000 - 100,000", "above 100,000"]}
      />
    </div>
  );
}

export default BargainBooks;
