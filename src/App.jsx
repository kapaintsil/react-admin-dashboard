// import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import Header component
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.css';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

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
