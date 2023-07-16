import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const routes = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Product",
    href: "product",
  },
  {
    name: "Responses",
    href: "responses",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-secondary border-b-2 border-primary">
      <div className="mx-auto relative flex max-w-7xl items-center md:justify-between px-2 py-2 lg:py-4 sm:px-6 lg:px-8">
        <div className="inline-flex flex-1 md:flex-initial items-center space-x-2">
          <RouterLink to="/" className="ml-2 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-3xl">Mythri</p>
          </RouterLink>
        </div>
        <nav className="items-center space-x-4 hidden lg:block lg:space-x-6">
          {routes.map((route) => (
            <Link
              activeClass="active"
              to={route.href}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              key={route.name}
              className={"text-xl font-medium cursor-pointer transition-colors"}
            >
              {route.name}
            </Link>
          ))}
        </nav>
        <div>
          <button className="w-10 h-10 rounded-full bg-violet-600 text-white">
            A
          </button>
        </div>
        <div className="lg:hidden p-2">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <p className="font-bold text-3xl">Mythri</p>
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
                    {routes.map((item, index) => (
                      <Link
                        key={index}
                        activeClass="active"
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="font-semibold cursor-pointer px-2 hover:bg-white hover:rounded-full hover:py-[0.3rem]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;