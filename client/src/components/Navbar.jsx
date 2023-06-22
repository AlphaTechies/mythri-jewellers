import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const menuItems = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Categories",
    href: "categories",
    subMenu: [
      { name: "Earring", href: "earring" },
      { name: "Necklace", href: "necklace" },
      { name: "Bangle", href: "bangle" },
      { name: "Ring", href: "ring" },
      { name: "Bracelet", href: "bracelet" },
      { name: "Pendant", href: "pendant" },
      { name: "Anklet", href: "anklet" },
      { name: "Nosepin", href: "nosepin" },
      { name: "Chain", href: "chain" },
      { name: "Mangalsutra", href: "mangalsutra" },
      { name: "Toe Ring", href: "toe-ring" },
      // { name: "Waist Chain", href: "waist-chain" },
      // { name: "Brooch", href: "brooch" },
      // { name: "Hair Accessory", href: "hair-accessory" },
      // { name: "Bridal Set", href: "bridal-set" },
      // { name: "Maang Tikka", href: "maang-tikka" },
      // { name: "Bajuband", href: "bajuband" },
      // { name: "Kamarband", href: "kamarband" },
      // { name: "Armlet", href: "armlet" },
      // { name: "Choker", href: "choker" },
      // { name: "Tikka", href: "tikka" },
      // { name: "Belt", href: "belt" },
      // { name: "Key Chain", href: "key-chain" },
    ],
  },
  {
    name: "Trending",
    href: "trending",
  },
  {
    name: "Offers",
    href: "offers",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="left-0 top-0 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link
            activeClass="active"
            to={"home"}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="font-bold cursor-pointer"
          >
            <img src="logo.png" alt="Logo" className="h-20 cursor-pointer" />
          </Link>
        </div>
        <nav className="hidden lg:block bg-primary px-3 py-2 rounded-full">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.name === "Categories" ? (
                  <div
                    onClick={toggleSubMenu}
                    className="font-semibold cursor-pointer px-2 text-secondary hover:rounded-full relative"
                  >
                    Categories
                    <svg
                      className={`ml-1 w-4 h-4 inline ${
                        isSubMenuOpen ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {isSubMenuOpen && (
                      <div className="absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow z-10">
                        <ul className="py-2 text-sm text-primary">
                          {item.subMenu.map((subMenuItem) => (
                            <li key={subMenuItem.name}>
                              <a
                                href={`#${subMenuItem.href}`}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {subMenuItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    activeClass="active"
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="font-semibold cursor-pointer px-2 text-secondary hover:rounded-full"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={40}
            duration={500}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-secondary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 text-primary cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-secondary shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img src="logo.png" alt="Logo" className="h-24" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.name === "Categories" ? (
                          <div className="relative">
                            <div
                              onClick={toggleSubMenu}
                              className="font-semibold cursor-pointer px-2 text-primary hover:bg-secondary hover:rounded-full hover:py-[0.3rem]"
                            >
                              Categories
                              <svg
                                className={`ml-1 w-4 h-4 inline ${
                                  isSubMenuOpen ? "transform rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                            {isSubMenuOpen && (
                              <div className="absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow z-10">
                                <ul className="py-2 text-sm text-gray-700">
                                  {item.subMenu.map((subMenuItem) => (
                                    <li key={subMenuItem.name}>
                                      <a
                                        href={`#${subMenuItem.href}`}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {subMenuItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            activeClass="active"
                            to={item.href}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="font-semibold text-primary cursor-pointer px-2 hover:rounded-full hover:py-[0.3rem]"
                          >
                            {item.name}
                          </Link>
                        )}
                      </React.Fragment>
                    ))}
                  </nav>
                </div>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="block mt-4 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-secondary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
