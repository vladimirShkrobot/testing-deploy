import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <>
      <Link data-testid="main-link" to={"/"}>
        main
      </Link>
      <Link data-testid="about-link" to={"/about"}>
        about
      </Link>
      <Link data-testid="users-link" to={"/users"}>
        users
      </Link>
    </>
  );
};

export default Navbar;
