import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const routes = [
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
    <div id="home" className="border-b text-primary bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="relative lg:px-10 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-3xl">Mythri</p>
          </Link>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
              <Link
                activeClass="active"
                to={route.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                key={route.name}
                className={
                  "text-lg font-medium cursor-pointer transition-colors"
                }
              >
                {route.name}
              </Link>
            ))}
          </nav>
          {/* <NavbarActions /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
