import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className="
      flex items-center justify-between 
      px-4 py-2 
      bg-[#181818] text-white 
      sticky top-0 z-10 w-full
    "
    >
      {/* Left section: Hamburger menu & Logo */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Icon */}
        <button
          className="p-2 rounded-full hover:bg-[#272727] focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12h18M3 6h18M3 18h18"
            />
          </svg>
        </button>

        {/* YouTube Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/YouTube_light_logo_%282024%29.svg/2880px-YouTube_light_logo_%282024%29.svg.png"
            alt="YouTube Logo"
            className="h-5 w-auto"
          />
        </a>
      </div>

      {/* Center section: Search bar */}
      <div className="flex items-center flex-1 justify-center">
        <div className="flex items-center max-w-2xl flex-1">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className="
                w-full 
                py-2 px-4 
                bg-[#121212] text-white text-sm 
                rounded-l-full 
                outline-none
                focus:outline-none focus:ring-1 focus:ring-gray-600
              "
            />
            <button
              className="
                bg-[#272727] 
                hover:bg-[#333] 
                rounded-r-full 
                p-2 px-4 
                flex items-center justify-center
              "
              aria-label="Search"
            >
              {/* Material-style Search Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
                aria-hidden="true"
              >
                <path
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 
                  9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 
                  16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 
                  4.99L20.49 19l-4.99-5zM9.5 14c-2.48 0-4.5-2.02-4.5-4.5S7.02 
                  5 9.5 5 14 7.02 14 9.5 11.98 14 9.5 14z"
                />
              </svg>
            </button>
          </div>
          <button
            className="
    ml-2 h-10 w-10 
    flex items-center justify-center
    rounded-full 
    bg-[#272727] 
    hover:bg-[#333] 
    focus:outline-none
  "
            aria-label="Search by voice"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
              aria-hidden="true"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 
             1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 
             5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 
             6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right section: Icons & Profile */}
      <div className="flex items-center space-x-4">
        {/* Create icon */}
        <button
          className="p-2 rounded-full hover:bg-[#272727] focus:outline-none"
          aria-label="Create"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>

        {/* Notifications icon */}
        <button
          className="p-2 rounded-full hover:bg-[#272727] focus:outline-none"
          aria-label="Notifications"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405C18.302 
              14.522 18 13.795 18 13V11a6 6 0 
              00-5-5.917V5a3 3 0 00-6 0v.083A6 6 0 
              002 11v2c0 .795-.302 1.522-.595 
              2.095L0 17h5m9 0v1a3 3 0 
              11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Profile Icon */}
        <div className="cursor-pointer">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
            alt="User profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
