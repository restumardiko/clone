import { useContext } from "react";
import Navbar from "../component/navbar/navbar";
import { Outlet } from "react-router-dom";
import { BookContext } from "../component/App";

export default function MainLayout() {
  const { cart } = useContext(BookContext);
  return (
    <div>
      <Navbar cart={cart} />
      <Outlet />
    </div>
  );
}
