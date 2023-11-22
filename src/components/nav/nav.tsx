const navLink: string[] = ["Одежда", "Обувь", "Аксессуары", "Скидки"];

function Nav() {
  return (
    <div className="container">
      <nav className="flex">
        <ul className="flex">
          {navLink.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
