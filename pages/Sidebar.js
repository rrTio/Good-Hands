import Link from 'next/link'

const Sidebar = () => {
  
    return (
        <div className="logo">
        <nav className={'nav-menu'}>
          <h1 className={'sidebarTitle'}>GoodHands</h1>
        <ul>
          <li>
            <Link href="/">
              <a> Dashboard </a>
            </Link>
          </li>
          <li>
            <Link href="/Booking">
              <a> Booking </a>
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    );
}

export default Sidebar;
