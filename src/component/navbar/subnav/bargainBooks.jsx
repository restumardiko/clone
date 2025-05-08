import SheetHov from "./sheetHov";

function BargainBooks({ handleBargain, isBargainSpread }) {
  return (
    <div
      id="Bargain"
      className="lg:px-5 lg:hover:text-white lg:h-full  lg:text-center group lg:hover:bg-red-700 lg:z-20"
      onClick={handleBargain}
    >
      <button className="h-full  ">
        <h2>
          Bargain Books
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 inline-block mx-1 text-orange-300"
              style={isBargainSpread ? {} : { transform: "rotate(270deg)" }}
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
      <div className=""></div>
      <SheetHov
        list={["under Rp. 50,000", "Rp. 50,000 - 100,000", "above 100,000"]}
      />
    </div>
  );
}

export default BargainBooks;
