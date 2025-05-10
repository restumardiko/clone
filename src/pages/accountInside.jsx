import { Link } from "react-router-dom";

export default function AccountInside() {
  return (
    <div id="container" className="m-auto bg-white h-full">
      <Link to="/">
        <div id="titel">
          {/* <h1>PERIPLUS</h1>
          <h2>ONLINE</h2> */}
          <img
            className="w-40 m-auto py-4"
            src="src/logo-periplus.jpg"
            alt=""
          />
        </div>
      </Link>

      <div
        id="login-border"
        className="lg:w-[30%] mx-auto my-4 border-2 border-gray-300 p-7  h-auto"
      >
        <div
          id="signin_header"
          className="text-left font-semibold   text-xl text-orange-600 font-sans mb-8 "
        >
          <h1>Sign In to Your Account</h1>
        </div>
        <div
          id="table_form"
          className="w-full text-xl text-gray-800  rounded-lg"
        >
          <table className="w-full my-2  ">
            <tr>
              <td>
                <b>Email:</b>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  maxLength={20}
                  placeholder=""
                  className="border-solid border rounded-md h-12 w-full my-3 text-2xl "
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Password:</b>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  name="password"
                  id=""
                  className="border-solid border rounded-md h-12 w-full my-3 text-2xl "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="bg-blue-600 w-full text-balance text-xl h-10  text-white my-3 border-solid border-2 border-black rounded-md"
                  type="submit"
                  value="Login"
                />
              </td>
            </tr>
          </table>
        </div>
        <div id="link" className="m-auto text-2xl text-blue-800 my-5">
          <h3 className="block " href="">
            You don't have account yet ? Register now{" "}
          </h3>
          <h3 href="">Forgot your Password ?</h3>
        </div>
        <div className="text-center text-xl">
          <b>Or Login With</b>
          <img src="src/google.png" className="w-52 mx-auto my-5" />
        </div>
      </div>
    </div>
  );
}
