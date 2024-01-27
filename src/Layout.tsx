import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
