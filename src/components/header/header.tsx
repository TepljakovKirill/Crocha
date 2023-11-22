function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper flex">
          <ul className="flex">
            <li>
              <a href="#">Оплата и доставка</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
          </ul>
          <a className="logo" href="#">
            <img src="img/logo.svg" alt="Crocha логотип" />
          </a>
          <a href="#">
            <img src="img/cart.svg" alt="Корзина товаров" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
