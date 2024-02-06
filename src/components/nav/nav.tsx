

function Nav() {
  return (
    <div className="container">
      <div className="nav-wrap">
        <nav className="menu-nav flex">
          <ul className="flex">
            <li className="menu-list"><a className="menu-link" href="#">Одежда</a>
              <ul className="submenu">
                <li className="submenu-list"><a href="#">Футболки</a></li>
                <li className="submenu-list"><a href="#">Брюки,джинсы,шорты</a></li>
                <li className="submenu-list"><a href="#">Рубашка,блузки</a></li>
                <li className="submenu-list"><a href="#">Толстовки</a></li>
                <li className="submenu-list"><a href="#">Леггинсы</a></li>
                <li className="submenu-list"><a href="#">Платья</a></li>
                <li className="submenu-list"><a href="#">Куртки,пальто,пиджаки</a></li>
                <li className="submenu-list"><a href="#">Свитеры</a></li>
                <li className="submenu-list"><a href="#">Юбки</a></li>
                <li className="submenu-list"><a href="#">Комплекты</a></li>
              </ul>
            </li>
            <li className="menu-list"><a className="menu-link" href="#">Обувь</a>
              <ul className="submenu">
                <li className="submenu-list"><a href="">Кроссовки</a></li>
                <li className="submenu-list"><a href="">Ботинки</a></li>
                <li className="submenu-list"><a href="">Тапочки</a></li>
              </ul>
            </li>
            <li className="menu-list"><a className="menu-link" href="#">Аксессуары</a>
              <ul className="submenu">
                <li className="submenu-list"><a href="">Заколки,резинки</a></li>
                <li className="submenu-list"><a href="">Бижутерия</a></li>
              </ul>
            </li>
            <li className="menu-list"><a className="menu-link" href="#">Скидки</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
