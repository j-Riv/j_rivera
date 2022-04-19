import { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const NavBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const toggleMenu = () => setCollapsed(collapsed => !collapsed);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src="/images/jriv.png" alt="j-Riv" height={60} width={60} />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded text-white hover:text-white hover:bg-zinc-800"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <Menu />
      {!collapsed && <MobileMenu />}
    </nav>
  );
};

export default NavBar;
