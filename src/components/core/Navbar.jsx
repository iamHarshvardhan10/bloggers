import { FaHome } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { MdCastConnected } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <nav
      className="bg-[#262A33] rounded-lg h-[60px] min-w-[600px] 
                    mx-auto mt-[10px] flex items-center justify-center shadow-md relative top-4"
    >
      <div className="flex items-center justify-center gap-10 text-white text-xl">
        <FaHome className="cursor-pointer hover:text-gray-400 transition" />
        <FaBlog className="cursor-pointer hover:text-gray-400 transition" />
        <MdCastConnected className="cursor-pointer hover:text-gray-400 transition" />
        <IoMdLogIn className="cursor-pointer hover:text-gray-400 transition" />
      </div>
    </nav>
  );
};

export default Navbar;
