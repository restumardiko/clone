import Content from "./booklist/content";

import data from "../utils";

function Container() {
  return (
    <div className="pt-40 w-full ">
      <Content data={data} />
    </div>
  );
}

export default Container;
