import { Link } from "react-router-dom";

export default function AccountInside() {
  return (
    <div id="container" className="">
      <Link to="/">
        <div id="titel">
          <h1>PERIPLUS</h1>
          <h2>ONLINE</h2>
        </div>
      </Link>

      <div id="login-border" className="w-auto h-auto">
        <div id="signin_header">
          <h1>Sign In to Your Account</h1>
        </div>
        <div id="table_form">
          <table>
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
                  placeholder="enter your email"
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
                <input type="password" name="password" id="" />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="bg-blue-500 w-56"
                  type="submit"
                  value="login"
                />
              </td>
            </tr>
          </table>
          <div id="link">
            <h3 className="block" href="">
              You don't have account yet ? Register now{" "}
            </h3>
            <h3 href="">Forgot your Password ?</h3>
          </div>
          <div>
            <h3>Or Login With</h3>
            <h1>GOOGLE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
