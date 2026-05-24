import NavbarLeft from "./navbarleft";
import NavbarRight from "./navbarright";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
