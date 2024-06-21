import Input from "../input";
import Chart from "../chart";
import Subnav from "./subnav";

export default function Navbar() {
  return (
    <>
      <div className="title">
        <h1>PERIPLUS.COM</h1>
        <p>Indonesia's largest bookstore</p>
      </div>
      <Input />
      <Chart />
      <Subnav />
    </>
  );
}
