import SheetHov from "./sheetHov";

function BargainBooks() {
  return (
    <div
      id="Bargain"
      className="px-5 hover:text-white h-full  text-center group hover:bg-red-700 z-20"
    >
      <button className="h-full">
        <h2>
          Bargain Books
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 inline-block mx-1"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          }
        </h2>
      </button>
      <SheetHov
        list={["under Rp. 50,000", "Rp. 50,000 - 100,000", "above 100,000"]}
      />
    </div>
  );
}

export default BargainBooks;
