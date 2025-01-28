import './SideBar.css';
import pageItems from '../data/sideBarPagesItems';
import navList from '../data/sidebarNavItems';
// import { indexOf } from 'echarts/types/src/export/api/util.js';

function Sidebar() {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul id='sidebar-nav' className="sidebar-nav">
        <li>
          <a href="/" className='nav-link'>
            <i className='bi bi-grid'></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* Component nav */}
        {navList.map(item => (
          <li className='nav-item' key={item.id}>
            <a
              href="#"
              className='nav-link collapsed'
              data-bs-toggle="collapse"
              data-bs-target={`#${item.name}-nav`}
            >
              <i className={item.icon}></i>
              <span>{item.name}</span>
              <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul
              id={`${item.name}-nav`}
              className='nav-content collapse'
              data-bs-parent='#sidebar-nav'
            >
              {item.list.map((item, index) => (
                <li key={index}>
                  <a href="">
                  <i className='bi bi-code'></i>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}

        {/* Sidebar Pages */}
        <li className='nav-heading'>Pages</li>
        {pageItems.map(nav => (
          <li className='nac-item' key={nav.id}>
            <a href="#" className='nav-link collapsed'>
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar