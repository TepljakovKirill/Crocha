import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-container flex">
        <ul className="flex">
          <a className="header-link" href="#">
            <li>Оплата и доставка</li>
          </a>
          <a className="header-link" href="#">
            <li>Отзывы</li>
          </a>
        </ul>
        <a className="logo-link" href="#">
          <img src="./img/logo.svg" alt="logo" />
        </a>
        <a className="cart-link" href="#">
          <img src="./img/cart.svg" alt="cart" />
        </a>
      </div>
    </div>
  );
}

export default Header;
