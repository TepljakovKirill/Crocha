import { Outlet } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";

type TonExitAuthorizationProps = {
  onExitAuthorization: () => void;
}

function Layout({ onExitAuthorization }: TonExitAuthorizationProps) {
  return (
    <div className="wrap-content">
      <Header onExitAuthorization={onExitAuthorization} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
