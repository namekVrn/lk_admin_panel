/* eslint-disable */
import '../layout/layout.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Divider } from 'antd';
const Layout = () => {
  return (
    <>
      <header className="header__box">
        <nav className="header__navigation">
          <ul className="header__itemList">
            <li className="header__nav--items">
              <NavLink to="/">HomePage</NavLink>
            </li>
            <li className="header__nav--items">
              <NavLink to="/tarifs">Тарифы</NavLink>
            </li>
            <li className="header__nav--items">
              <NavLink to="/clientList">Все клиенты</NavLink>
            </li>
            <li className="header__nav--items">
              <NavLink to="/Tickets">Tickets</NavLink>
            </li>
            <li className="header__nav--items">
              <NavLink to="/test">TestComponent</NavLink>
            </li>
            <li className="header__nav--items fix pulse">
              <NavLink className="navLink__add" to="/addClients">Добавить клиента</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        
        <Outlet />
      </main>
      
      <footer>
      <Divider/>
        <p>clients-box</p>
      </footer>
    </>
  );
};
export default Layout;
