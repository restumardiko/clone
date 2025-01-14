function onAccount(e) {
  e.preventDefault();
  console.log("onAccount clicked");
}

function Account() {
  return (
    <>
      <button onClick={onAccount} className="p-6 text-5xl">
        🙂
      </button>
    </>
  );
}

export default Account;
