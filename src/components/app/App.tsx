import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "../privateRouter/privateRouter";
import { AppRoutes, AuthorizationStatus } from "../../const";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../../pages/homePage/homePage";
import LoginPage from "../../pages/loginPage/loginPage";
import BasketPage from "../../pages/basketPage/basketPage";
import PaymentPage from "../../pages/paymentPage/paymentPage";
import NotFoundPage from "../../pages/notFoundPage/notFoundPage";
import "../../App.scss";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={AppRoutes.Login} element={<LoginPage />} />
            <Route
              path={AppRoutes.BasketPage}
              element={
                <PrivateRoute
                  restrictedFor={AuthorizationStatus.NoAuth}
                  redirectTo={AppRoutes.Login}
                >
                  <BasketPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoutes.PaymentPage} element={<PaymentPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
