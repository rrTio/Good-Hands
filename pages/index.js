import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../pages/Sidebar';
import { Router } from 'next/dist/client/router';

export default function Home() {
  return (
    <div>
      <title>Dashboard</title>
      <div className="grid-container">
        <div className="grid-item bg-purple-800 border-r-2 border-black">
          <Sidebar />
        </div>

        <div className="grid-item">
          <div className={"header-booking"}>
            <h1 className={"pageTitle"}>Dashboard</h1>
          </div>

          <div className="h-auto w-75 p-3 m-5 space-y-2 md:space-y-0 flex md:flex-row flex-col justify-content-evenly align-items-center">
            <div
              className="h-auto w-32 p-2 rounded-3 flex flex-col justify-content-center 
              align-items-center bg-purple-800 border-1 border-purple-800"
            >
              <i className="bi bi-person-fill text-white-50 text-4xl"></i>
              <h3 className="text-white">Lorem ipsum</h3>
            </div>

            <div
              className="h-auto w-32 p-2 rounded-3 flex flex-col justify-content-center 
              align-items-center bg-purple-800 border-1 border-purple-800"
            >
              <i className="bi bi-person-fill text-white-50 text-4xl"></i>
              <h3 className="text-white">Lorem ipsum</h3>
            </div>

            <div
              className="h-auto w-32 p-2 rounded-3 flex flex-col justify-content-center 
              align-items-center bg-purple-800 border-1 border-purple-800"
            >
              <i className="bi bi-person-fill text-white-50 text-4xl"></i>
              <h3 className="text-white">Lorem ipsum</h3>
            </div>

            <div
              className="h-auto w-32 p-2 rounded-3 flex flex-col justify-content-center 
              align-items-center bg-purple-800 border-1 border-purple-800"
            >
              <i className="bi bi-person-fill text-white-50 text-4xl"></i>
              <h3 className="text-white">Lorem ipsum</h3>
            </div>
          </div>

          <div className="h-auto w-75 p-1 md:p-3 m-5 space-y-2 md:space-y-0 flex md:flex-row flex-col justify-content-evenly align-items-center">
            <div className="h-auto w-50 p-3 m-2 flex flex-column justify-content-center rounded-3 border-2 border-black space-y-2">
              <h1 className="text-gray-800 text-sm md:text-2xl text-center">
                {" "}
                User Management{" "}
              </h1>

              <div className="space-y-1 md:space-y-0 flex md:flex-row flex-col justify-content-evenly">
                <div
                  className="h-auto w-32 p-2 space-y-1 rounded-3 flex flex-col justify-content-center 
                align-items-center bg-purple-800 border-1 border-purple-800"
                >
                  <i className="bi bi-person-fill text-white-50 text-4xl"></i>
                  <h3 className="text-white">Customers</h3>
                </div>

                <div
                  className="h-auto w-32 p-2 space-y-1 rounded-3 flex flex-col justify-content-center 
                align-items-center bg-purple-800 border-1 border-purple-800"
                >
                  <i className="bi bi-person text-white-50 text-4xl"></i>
                  <h3 className="text-white">Sellers</h3>
                </div>
              </div>
            </div>

            <div className="h-auto w-50 p-3 m-2 flex flex-column justify-content-center rounded-3 border-2 border-black space-y-2">
              <h1 className="text-gray-800 text-sm md:text-2xl text-center">
                {" "}
                Item Management{" "}
              </h1>

              <div className="space-y-1 md:space-y-0 flex md:flex-row flex-col justify-content-evenly">
                <div
                  className="h-auto w-32 p-2 space-y-1 rounded-3 flex flex-col justify-content-center 
                align-items-center bg-purple-800 border-1 border-purple-800"
                >
                  <i className="bi bi-search text-white-50 text-4xl"></i>
                  <h3 className="text-white">Products</h3>
                </div>

                <div
                  className="h-auto w-32 p-2 space-y-1 rounded-3 flex flex-col justify-content-center 
                align-items-center bg-purple-800 border-1 border-purple-800"
                >
                  <i className="bi bi-cart2 text-white-50 text-4xl"></i>
                  <h3 className="text-white">Orders</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto w-75 p-1 md:p-3 m-5 space-y-2 md:space-y-0 flex md:flex-row flex-col justify-content-evenly align-items-center">
            <div className="h-auto w-50 p-3 m-2 flex flex-column justify-content-center rounded-3 border-2 border-black space-y-2">
              <h1 className="text-gray-800 text-sm md:text-2xl text-center">
                {" "}
                Search Management{" "}
              </h1>

              <div className="space-y-1 md:space-y-0 flex md:flex-row flex-col justify-content-evenly">
                <div
                  className="h-auto w-32 p-2 space-y-1 rounded-3 flex flex-col justify-content-center 
                align-items-center bg-purple-800 border-1 border-purple-800"
                >
                  <i className="bi bi-palette2 text-white-50 text-4xl"></i>
                  <h3 className="text-white">Tags</h3>
                </div>

                <div
                  className="h-auto w-32 p-2 space-y-1 rounded-3 flex flex-col justify-content-center 
                align-items-center bg-purple-800 border-1 border-purple-800"
                >
                  <i className="bi bi-list-ul text-white-50 text-4xl"></i>
                  <h3 className="text-white">Categories</h3>
                </div>
              </div>
            </div>

            <div className="h-auto w-50 p-3 m-2 flex flex-column justify-content-center rounded-3 border-2 border-black space-y-2">
              <h1 className="text-gray-800 text-sm md:text-2xl text-center">
                {" "}
                System Management{" "}
              </h1>

              <div className="space-y-1 md:space-y-0 flex md:flex-row flex-col justify-content-evenly">
                <div
                  className="h-auto w-32 p-2 space-y-1 rounded-3 flex flex-col justify-content-center 
                align-items-center bg-purple-800 border-1 border-purple-800"
                >
                  <i className="bi bi-graph-up text-white-50 text-4xl"></i>
                  <h3 className="text-white">Projections</h3>
                </div>

                <div
                  className={"h-auto w-32 p-2 space-y-1 rounded-3 flex flex-col justify-content-center align-items-center bg-purple-800 border-1 border-purple-800"}>
                  <i className="bi bi-gear-fill text-white-50 text-4xl"></i>
                  <h3 className="text-white">Configurations</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
