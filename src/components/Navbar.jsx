import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

import { navLinks } from "../assets/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "text-grey-100 font-bold tracking-wide text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transitions durations-300";

  const links = (
    <>
      {navLinks.map((navlink) => {
        const { id, href, text } = navlink;
        return (
          <a key={id} href={href} className={linkClasses}>
            {text}
          </a>
        );
      })}
    </>
  );

  return (
    <nav className="bg-gray-900 text-white fixed sticky w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row w-full justify-between">
            <div className="tracking-wider">
              <p className="text-2xl font-bold text-sky-600">
                FREYDIER <span className="text-gray-50">Carrelage</span>
              </p>
            </div>
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
