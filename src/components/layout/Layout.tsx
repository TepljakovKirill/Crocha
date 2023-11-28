import { Outlet } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";

function Layout() {
  return (
    <div className="wrap-content">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
