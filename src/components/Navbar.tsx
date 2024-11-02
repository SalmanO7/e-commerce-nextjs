import Link from "next/link";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="w-full bg-[#004581] text-[#DFFF]">
      <nav className="w-full flex justify-around items-center lg:px-[40px]  lg:justify-between py-3 gap-4">
        <div className="logo font-bold text-xl">
          <Link href="/home">Testy Food </Link>
        </div>

        <ul className="hidden sm:block sm:flex sm:gap-3">
          <li className="text-[18px]">
            <Link href="/home">Home</Link>
          </li>
          <li className="text-[18px]">
            <Link href="/foods">Foods</Link>
          </li>
          <li className="text-[18px]">
            <Link href="/gallary">Gallary</Link>
          </li>
          <li className="text-[18px]">
            <Link href="/blog">Blogs</Link>
          </li>
        </ul>
        <div className="icons flex gap-1 items-center text-xl">
          <RiShoppingBagLine />
          <FaRegUser />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
