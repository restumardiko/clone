import { Link } from "react-router-dom";

function onAccount(e) {
  console.log("onAccount clicked");
}

function Account() {
  return (
    <Link to="/account">
      <button onClick={onAccount} className="p-6 text-5xl hover:">
        🙂
      </button>
    </Link>
  );
}

export default Account;
