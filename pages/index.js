import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../pages/Sidebar';
import { Router } from 'next/dist/client/router';

export default function Home() {
  return (
    <div>
      <title>Dashboard</title>
      <div className={"grid-container"}>
        <div className="grid-item bg-purple-800 border-r-2 border-black">
          <Sidebar />
        </div>

        <div className="grid-item">
          <div className={"header-booking"}>
            <h1 className={"pageTitle"}>Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
