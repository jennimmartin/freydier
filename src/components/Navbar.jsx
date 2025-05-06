import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { navLinks } from "../assets/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "text-grey-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transitions durations-300";

  const links = (
    <>
      {navLinks.map((navLink) => {
        const { id, href, text } = navLink;
        return (
          <a key={id} href={href} className={linkClasses}>
            {text}
          </a>
        );
      })}
    </>
  );

  return (
    <nav className="bg-sky-700 text-white fixed sticky w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row w-full justify-between">
            <div className="text-xl font-bold">FREYDIER Carrelage</div>
            <div className="hidden md:block">
              <div className="flex ml-10 items-baseline space-x-2">{links}</div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="fill-gray-100"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
          {links}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
