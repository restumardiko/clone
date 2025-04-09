export default function Footer() {
  return (
    <div className="bg-white mt-20 block mx-auto w-[85%] h-auto  flex-col text-blue-700 text-3xl font-bold  ">
      <div className="image flex flex-row h-48 my-10 text-center ">
        <div id="shiping" className=" inline-block  w-[25%]  ">
          <h1 className=""> Delivered By :</h1>
          <img className="h-28 mx-auto" src="src/shipping.png" alt="" />
        </div>
        <div id="payment" className="inline-block w-[25%] h-auto">
          <h1 className="inline">Payment Method :</h1>
          <img className="mx-auto h-28" src="src/payments.png" alt="" />
        </div>
        <div className="inline-block w-[25%] h-full p-8">
          <img className="h-28 mx-auto" src="src/banks.png" alt="" />
        </div>
        <div className="secured-by inline-block w-[25%] h-full ">
          <h1> Secured by :</h1>
          <img className="mx-auto h-24" src="src/digicert.png" alt="" />
        </div>
      </div>
      <div className="contact-container flex h-auto text-gray-900 text-2xl font-normal my-10 flex-row">
        <div className="information flex-col w-[20%] ">
          <div className="flex-col w-[80%] mx-auto">
            <h1 className="text-3xl font-bold pb-8">Information</h1>
            <ul className="">
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
            <ul>
              <li>Contact Us</li>
              <li>Returns</li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>
        <div className="My-account  w-[20%]">
          <div className="flex-col w-[80%] mx-auto">
            <h1 className="text-3xl font-bold pb-8">My Account</h1>
            <ul>
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
            <ul>
              <li>Books & Promotion Udates :</li>
              <li>@periplusdotcom</li>
              <li>PeriplusIndonesia</li>
              <li>@Periplus_Store</li>
              <li>Googleplay logo</li>
              <li>app store logo</li>
            </ul>
          </div>
        </div>
        <div className="Contact_us  w-[30%]">
          <div className="flex-col w-[80%] mx-auto">
            <h1 className="text-3xl font-bold pb-8 ">Contact Us</h1>
            <ul>
              <li>Monday - Sunday (08:00-17.00)</li>
              <li>Customer Care :</li>
              <li>(+62)21 4682 1089</li>
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
