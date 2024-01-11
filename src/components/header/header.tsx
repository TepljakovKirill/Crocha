import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/slices/store";

type TonExitAuthorizationProps = {
  onExitAuthorization: () => void;
}

function Header({ onExitAuthorization }: TonExitAuthorizationProps) {

  const carts = useSelector((state: RootState) => state.cart.carts);
  const countProduct = carts.length;

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="block-wrap flex">
            <ul className="flex">
              <li>
                <Link to="/Оплата">Оплата и доставка</Link>
              </li>
              <li>
                <a href="#">Отзывы</a>
              </li>
            </ul>
            <Link className="logo" to="/">
              <img src="img/logo.svg" alt="Crocha логотип" />
            </Link>
            <Link to="/authorization">
              <svg className="entrance" width="25" height="25" viewBox="0 0 25 25"><path fill="#fff" d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z" /></svg>
            </Link>
            <div className="basket-wrap">
              {countProduct !== 0 ? <div className="countProduct">{countProduct}</div> : ""}
              <Link to="/Корзина">
                <svg
                  className="cart"
                  fill="none"
                  height="39"
                  viewBox="0 0 39 39"
                  width="39"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.39999 1.70001H6.60001"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d="M6.60001 1.70001L11 18.9"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d="M11.8 18.9H28.3"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>

            <svg
              onClick={onExitAuthorization}
              className="exit"
              x="0px" y="0px" width="24px" height="24px"
              viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
              <g>
                <g>
                  <g>
                    <path d="M15,24H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1v7c0,0.6-0.4,1-1,1s-1-0.4-1-1V2H2v20h12v-6 c0-0.6,0.4-1,1-1s1,0.4,1,1v7C16,23.6,15.6,24,15,24z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M23,13H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h15c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M23,13c-0.3,0-0.5-0.1-0.7-0.3l-4-4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4C23.5,12.9,23.3,13,23,13z
			              	"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M19,17c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4-4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-4,4C19.5,16.9,19.3,17,19,17z" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
