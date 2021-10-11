import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import LayersIcon from '@material-ui/icons/Layers';
import LockIcon from '@material-ui/icons/Lock';
import EcoIcon from '@material-ui/icons/Eco';
import Link from 'next/link';

const Sidebar = () => {
    return (
      <div className="md:w-3/12 w-6/12 h-screen shadow-2xl sides">
        <div className=" border-b py-3 mt-1 flex justify-around ">
          <p className="text-xl  font-semibold">GoodHands</p>
        </div>
        <div className="p-4 space-y-14">
          <div className="space-y-4">
            <h1 className="text-black-800">Menu</h1>

            <div className="">
              <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                <DonutLargeIcon className=" text-black-300" />
                <Link href="/index">
                  <a> Dashboard </a>
                </Link>
              </div>
            </div>

            <div className="">
              <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                <ClearAllIcon className="text-black-300" />
                <Link href="/Booking">
                  <a> Booking </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;