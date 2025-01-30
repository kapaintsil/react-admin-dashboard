import './Nav.css';
import NavAvatar from './navComponents/NavAvatar';
import NavMessage from './navComponents/NavMessage';
import NavNotice from './navComponents/NavNotice';

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  );
};

export default Nav;
