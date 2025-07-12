import { Link } from "react-router-dom";

export default function AccountInside() {
  return (
    <div id="container" className="m-auto bg-white h-full  ">
      <Link to="/">
        <div id="titel">
          <img className="w-44 m-auto py-4" src="/logo-periplus.webp" alt="" />
        </div>
      </Link>

      <div
        id="login-border"
        className="w-[21rem] lg:w-96 lg:mx-auto my-4 border-[0.1rem] border-gray-400 p-3 mx-auto  h-auto"
      >
        <div
          id="signin_header"
          className="text-left font-bold   text-xl  text-orange-600 font-sans mb-4 "
        >
          <h1>Sign In to Your Account</h1>
        </div>
        <div
          id="table_form"
          className="w-full text-[1.1rem]  text-gray-800  rounded-lg"
        >
          <table className="w-full my-1  ">
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    maxLength={20}
                    placeholder=""
                    className="border-solid border rounded-md h-8 w-full  text-sm px-3 "
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
                    className="border-solid border rounded-md h-8 w-full text-xl px-3 "
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="bg-blue-600 w-full text-balance text-base h-7  text-white my-1 border-solid border-[0.1rem]  border-black rounded-md"
                    type="submit"
                    value="Login"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="link" className="m-auto text-xs text-blue-800 mt-4">
          <h3 className="block " href="">
            You don't have account yet ? Register now{" "}
          </h3>
          <h3 href="">Forgot your Password ?</h3>
        </div>
        <div className="text-center text-xs text-gray-600 mt-2">
          <b>Or Login With</b>
          <img src="/google.webp" className="w-28 mx-auto my-5" />
        </div>
      </div>
      <div className="text-center text-[0.7rem] text-gray-500">
        © 2011-2025 Periplus Holding Ltd.
      </div>
    </div>
  );
}
