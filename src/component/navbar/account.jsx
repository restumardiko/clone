import { Link } from "react-router-dom";

function onAccount(e) {
  console.log("onAccount clicked");
}

function Account() {
  return (
    <Link className="my-auto" to="/account">
      <button onClick={onAccount} className="px-2  text-5xl  hover:">
        🙂
      </button>
    </Link>
  );
}

export default Account;
