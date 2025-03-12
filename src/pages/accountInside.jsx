import { Link } from "react-router-dom";

export default function AccountInside() {
  return (
    <div id="container" className="">
      <Link to="/">
        <div id="titel">
          <h1>PERIPLUS</h1>
          <h2>the largerst book store in indonesia</h2>
        </div>
      </Link>
      <div id="form"></div>
    </div>
  );
}
