import '../styles/globals.css';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import "../styles/booking.css";
import '../styles/sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
