import Input from "./input";
import Chart from "./chart";
import Subnav from "./subnav";

export default function Navbar() {
  return (
    <>
      <div className="flex 	flex-direction: row bg-red-600 min-h-28">
        <div className="text-white  ">
          <h1 className="font-larger">PERIPLUS.COM</h1>
          <p>Indonesia's largest bookstore</p>
        </div>
        <Input />
        <Chart />
      </div>
      <Subnav />
    </>
  );
}
