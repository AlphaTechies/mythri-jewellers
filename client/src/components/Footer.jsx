import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="logo.png"
                alt="Mythri Jewellers"
                className="mr-2 h-20 cursor-pointer"
              />
              <h2 className="text-sm font-semibold text-secondary uppercase">
                Mythri Jewellers
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8 text-secondary md:mb-0">
            <h2 className="text-sm font-semibold text-secondary uppercase mb-4">
              About Us
            </h2>
            <ul className="text-secondary font-medium">
              <li className="mb-3">
                <a href="#" className="">
                  About Us
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-sm font-semibold text-secondary uppercase mb-4">
              Services
            </h2>
            <ul className="text-secondary font-medium">
              <li className="mb-3">
                <a href="#" className="">
                  Jewelry Design
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="">
                  Customization
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Repair & Restoration
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-sm font-semibold text-secondary uppercase mb-4">
              Contact
            </h2>
            <ul className="text-secondary font-medium">
              <li className="mb-3">
                <a href="tel:+1234567890" className="">
                  +1 234 567 890
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:info@mythrijewellers.com" className="">
                  info@mythrijewellers.com
                </a>
              </li>
              <li>
                <a href="#" className="">
                  123 Main Street, City
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-secondary" />
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} Mythri Jewellers. All rights
            reserved.
          </span>
          <div className="flex space-x-4">
            <a href="#" className="text-secondary">
              <FaFacebook size={20} />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-secondary">
              <FaInstagram size={20} />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-secondary">
              <FaTwitter size={20} />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
