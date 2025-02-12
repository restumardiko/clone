import Sheet from "./sheet";

export default function Content({ data, onViewMore, spread }) {
  console.log(spread);
  if (spread === "spread") {
    return (
      <>
        <Sheet
          sheetName="New Release"
          datas={data}
          onViewMore={onViewMore}
          spread="View More"
        />
        <Sheet
          sheetName="Best Seller"
          datas={data}
          onViewMore={onViewMore}
          spread="View More"
        />
        <Sheet
          sheetName="Most Wished"
          datas={data}
          onViewMore={onViewMore}
          spread="View More"
        />
      </>
    );
  } else if (spread === "New Release") {
    return (
      <Sheet
        sheetName="New Release"
        datas={data}
        onViewMore={onViewMore}
        spread="View Less"
      />
    );
  } else if (spread === "Best Seller") {
    return (
      <Sheet
        sheetName="Best Seller"
        datas={data}
        onViewMore={onViewMore}
        spread="View Less"
      />
    );
  } else if (spread === "Most Wished") {
    return (
      <Sheet
        sheetName="Most Wished"
        datas={data}
        onViewMore={onViewMore}
        spread="View Less"
      />
    );
  }
}
