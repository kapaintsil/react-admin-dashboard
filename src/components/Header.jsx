import Logo from './headerComponents/navComponents/Logo';
import SearchBar from './headerComponents/navComponents/SearchBar';
import Nav from './headerComponents/navComponents/Nav';
import './Header.css';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  );
}

export default Header;
