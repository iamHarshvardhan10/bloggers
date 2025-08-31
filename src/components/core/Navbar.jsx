import { FaHome } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { MdCastConnected } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-[#262A33] rounded-lg h-[60px] min-w-[600px] 
                    mx-auto mt-[10px] flex items-center justify-center shadow-md relative top-4"
    >
      <div className="flex items-center justify-center gap-10 text-white text-xl">
        <Link to={"/"}>
          <FaHome className="cursor-pointer hover:text-[#DE6012] transition" />
        </Link>
        <Link to={"/blogs"}>
          <FaBlog className="cursor-pointer hover:text-[#DE6012] transition" />
        </Link>
        <Link to={"/contact"}>
          <MdCastConnected className="cursor-pointer hover:text-[#DE6012] transition" />
        </Link>
        <Link to={"/register"}>
          <IoMdLogIn className="cursor-pointer hover:text-[#DE6012] transition" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
