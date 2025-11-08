import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="shadow-md border-b-[0.5px] border-gray-300">
        <nav className="px-2 py-3 flex md:flex-row flex-col justify-between items-center w-11/12 mx-auto">
          <h1 className="text-2xl font-bold">CS-Ticket System</h1>
          <div className="flex md:mt-0 mt-4 md:flex-row flex-col items-center gap-4">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              FAQ
            </a>
            <a href="#" className="text-gray-600">
              Changelog
            </a>

            <a href="#" className="text-gray-600">
              Blog
            </a>
            <a href="#" className="text-gray-600">
              Download
            </a>
            <a href="#" className="text-gray-600">
              Contact
            </a>
            <button
              className=" text-white px-4 py-2 rounded-lg hover:cursor-pointer"
              style={{
                background:
                  "linear-gradient(#632EE3, #9F62F290)"
              }}
            >
              + New Ticket
            </button>
          </div>
          <div className="block md:hidden"></div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
