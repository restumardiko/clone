export default function Footer() {
  return (
    <div className="bg-white mt-16 block  w-full px-40  h-auto flex-wrap pt-20 flex-col text-blue-600  text-3xl font-bold  ">
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
              <li>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#25D366"
                  width="26"
                  height="26"
                  stroke=""
                  className="inline-block mr-2"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                6287784644608(Text Only)
              </li>
              <li>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#25D366"
                  width="26"
                  height="26"
                  stroke=""
                  className="inline-block mr-2"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                6287784963509(Text Only)
              </li>
              <li>Order Related :</li>
              <li>customercare@periplus.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-end text-2xl mb-8 font-normal text-gray-600">
        <h4 className="inline mx-4 ">©2011-2025 Periplus Holding Ltd.</h4>
      </div>
    </div>
  );
}
