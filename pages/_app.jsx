import '../styles/globals.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
