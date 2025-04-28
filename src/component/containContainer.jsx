import Content from "./booklist/content";
import Iklan from "./iklan/iklan";
import data from "../utils";
import { createContext, useState } from "react";

function Container() {
  // const [spread, setSpread] = useState("spread");
  // console.log(spread);

  // const onViewMore = (e) => {
  //   console.log(e.target);
  //   if (spread === "spread") {
  //     const etok = e.target.id;
  //     setSpread(() => {
  //       return etok;
  //     });
  //   } else if (spread !== "spread") {
  //     setSpread(() => {
  //       return "spread";
  //     });
  //   }

  //   // console.log(typeof e.target.id);
  // };

  return (
    <div className="pt-40">
      {/* <Iklan /> */}
      <Content data={data} />
    </div>
  );
}

export default Container;
