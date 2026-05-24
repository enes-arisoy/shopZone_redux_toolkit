import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaRegHeart } from "react-icons/fa6";

const NavbarRight = () => {

  const {itemCount} = useSelector((state)=> state.cart)
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center max-md:hidden rounded-full p-2 px-3 bg-gray-200 ">
        <input className="outline-none " type="text" placeholder="Search..." />
        <CiSearch size={28} />
      </div>
      <FaRegHeart size={28} />

      <div className="relative">
        <Link
          to="/cart"
          className="absolute flex items-center justify-center -top-4 -right-3 bg-red-400 text-white  rounded-full w-6 h-6"
        >
          {itemCount}
        </Link>
        <FaOpencart size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
