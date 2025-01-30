import Logo from './navComponents/Logo';
import SearchBar from './navComponents/SearchBar';
import Nav from './navComponents/Nav';
import './Header.css';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  );
};

export default Header;
