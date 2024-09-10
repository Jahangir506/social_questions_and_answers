import InputSearch from "@/components/NavbarC/InputSearch";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import "../../../app/globals.css"
const Navbar = () => {
  return (
    <>
      <div className="navbar py-3">
        <div className="navbar-start justify-normal lg:justify-between">
          <div className="dropdown flex lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-1.5">
            <Image width={50} height={50} src={logo} alt="website logo" />
            <a className="text-2xl font-bold">Inquiry</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Blip</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex space-x-2">
          <div className="mr-4">
            <InputSearch />
          </div>
          <a className="btn hidden bg_btn-primary hover:bg-[#0285DD] lg:flex px-8 text-white rounded-sm btn-sm btn-primary">
            Sign In
          </a>
          <a className="btn hidden lg:flex px-8 text-white rounded-sm btn-sm btn-outline border-gray-600 hover:bg-[#0285DD] hover:text-white btn-ghost">
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
