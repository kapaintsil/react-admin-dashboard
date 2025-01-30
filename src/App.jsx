// import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import Header component
import Header from './components/headerComponents/Header';
import Sidebar from './components/sidebarComponents/Sidebar';
import Main from './components/mainComponent/Main';
import './App.css';
import Footer from './components/footerComponents/Footer';
import BackToTop from './components/bacToTopComponents/BackToTop';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
