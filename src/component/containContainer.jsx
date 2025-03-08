import Content from "./booklist/content";
import Iklan from "./iklan/iklan";
import data from "../utils";
import { createContext, useState } from "react";

function Container() {
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
      <div className="">
        {/* <Iklan /> */}
        <Content data={data} onViewMore={onViewMore} spread={spread} />
      </div>
    );
  } else if (
    spread === "New Release" ||
    spread === "Most Wished" ||
    spread === "Best Seller"
  ) {
    return (
      <div className="">
        <Content data={data} onViewMore={onViewMore} spread={spread} />
      </div>
    );
  }
}

export default Container;
