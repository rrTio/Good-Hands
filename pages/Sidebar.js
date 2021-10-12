import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Link from "next/link";



const Sidebar = () => {
  
  return (
    <div>
      <div className={"relative min-h-screen md:flex"}>
        <div
          className={"bg-gray-800 text-gray-100 flex justify-between md:hidden"}
        >
          <center>
            <h1>GoodHands</h1>
          </center>
          <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="sidebar border-r-2 border-black text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <h1>
            <span className="text-2xl font-extrabold text-black">
              GoodHands
            </span>
          </h1>
          <nav>
            <Link href="./">
              <a className="block py-2.5 px-4 rounded transition duration-200 text-black hover:bg-green-300 bg-opacity-100 hover:text-black">
                Dashboard
              </a>
            </Link>

            <Link href="./Booking">
              <a className="block py-2.5 px-4 rounded transition duration-200 text-black hover:bg-green-300 bg-opacity-100 hover:text-black">
                Booking
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;