import Sheet from "./sheet";
import { useState } from "react";

export default function Content({ data }) {
  const [spread, setSpread] = useState("spread");
  console.log(spread);

  const onViewMore = (e) => {
    console.log(e.target);
    if (spread === "spread") {
      const etok = e.target.id;
      setSpread(() => {
        return etok;
      });
    } else if (spread !== "spread") {
      setSpread(() => {
        return "spread";
      });
    }

    // console.log(typeof e.target.id);
  };

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
