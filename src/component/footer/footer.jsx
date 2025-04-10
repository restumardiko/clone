import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-white mt-20 block  w-full px-40  h-auto flex-wrap pt-20 flex-col text-blue-600  text-3xl font-bold  ">
      <div className="image flex flex-row h-48  text-center ">
        <div id="shiping" className=" inline-block  w-[25%]  ">
          <h1 className=""> Delivered By :</h1>
          <img className="h-28 my-4 mx-auto" src="src/shipping.png" alt="" />
        </div>
        <div id="payment" className="inline-block w-[25%] h-auto">
          <h1 className="inline">Payment Method :</h1>
          <img className="mx-auto h-28" src="src/payments.png" alt="" />
        </div>
        <div className="inline-block w-[25%] h-full p-8">
          <img className="h-28 mx-auto my-4" src="src/banks.png" alt="" />
        </div>
        <div className="secured-by inline-block w-[25%] h-full ">
          <h1> Secured by :</h1>
          <img className="mx-auto my-4 h-20" src="src/digicert.png" alt="" />
        </div>
      </div>
      <div className="contact-container flex h-auto text-gray-900 text-2xl font-normal my-10 flex-row">
        <div className="information flex-col w-[20%] ">
          <div className="flex-col w-[80%] mx-auto">
            <h1 className="text-3xl font-bold pb-8">Information</h1>
            <ul className="space-y-4">
              <li>About Us</li>
              <li>E-Books FAQ</li>
              <li>Store Location</li>
              <li>Shiping & Delivery</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Returns Policy</li>
            </ul>
          </div>
        </div>
        <div className="Customer-service  w-[20%]">
          <div className="flex-col w-[80%] mx-auto">
            <h1 className="text-3xl font-bold pb-8">Customer Service</h1>
            <ul className="space-y-4">
              <li>Contact Us</li>
              <li>Returns</li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>
        <div className="My-account  w-[20%]">
          <div className="flex-col w-[80%] mx-auto">
            <h1 className="text-3xl font-bold pb-8">My Account</h1>
            <ul className="space-y-4">
              <li>Account Details</li>
              <li>Order History</li>
              <li>Wish List</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="Follow_us flex-col w-[20%]">
          <div className="flex-col w-[80%] mx-auto">
            <h1 className="text-3xl font-bold pb-8">Follow Us</h1>
            <ul className="space-y-4">
              <li>Books & Promotion Udates :</li>
              <li className="">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className=" text-pink-500 transition-colors size-10 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
                @periplusdotcom
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook-icon lucide-facebook size-10 inline-block text-blue-600"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                PeriplusIndonesia
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter-icon lucide-twitter inline-block text-blue-500 size-10"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                @Periplus_Store
              </li>
              <li>
                <img src="src/google-play.png" className="w-full" alt="" />
              </li>
              <li>
                <img src="src/app-store.png" className="w-full" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="Contact_us  w-[30%]">
          <div className="flex-col w-[80%] mx-auto ">
            <h1 className="text-3xl font-bold pb-8 ">Contact Us</h1>
            <ul className="space-y-4">
              <li>Monday - Sunday (08:00-17.00)</li>
              <li>Customer Care :</li>
              <li>(+62) 21 4682 1089</li>
              <li>Product Related : </li>
              <li>logo wa 6287784644608(Text Only)</li>
              <li>logo wa 6287784963509(Text Only)</li>
              <li>Order Related :</li>
              <li>customercare@periplus.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-end text-2xl font-normal text-gray-600">
        <h4 className="inline mx-4">c .2011-2025 Periplus Holding Ltd.</h4>
      </div>
    </div>
  );
}
