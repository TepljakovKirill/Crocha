import { Link } from "react-router-dom";
import { menuСloth } from "../../const";
import { menuShoes } from '../../const';
import { menuAccessories } from '../../const';

function Nav() {
  return (
    <div className="container">
      <div className="nav-wrap">
        <nav className="menu-nav flex">
          <ul className="flex">
            <li className="menu-list"><Link to="/categories" className="menu-link">Одежда</Link>
              <ul className="submenu">
                {menuСloth.map((link, i) => (
                  <li key={i} className="submenu-list"><Link to="/categories">{link}</Link></li>
                ))}
              </ul>
            </li>
            <li className="menu-list"><Link to="/categories" className="menu-link">Обувь</Link>
              <ul className="submenu">
                {menuShoes.map((link, i) => (
                  <li key={i} className="submenu-list"><Link to="/categories">{link}</Link></li>
                ))}
              </ul>
            </li>
            <li className="menu-list"><Link to="/categories" className="menu-link">Аксессуары</Link>
              <ul className="submenu">
                {menuAccessories.map((link, i) => (
                  <li key={i} className="submenu-list"><Link to="/categories">{link}</Link></li>
                ))}
              </ul>
            </li>
            <li className="menu-list"><a className="menu-link" href="/categories">Скидки</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
