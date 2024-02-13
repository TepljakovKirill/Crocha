import React from "react";

import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "../privateRouter/privateRouter";
import { AppRoutes } from "../../const";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../../pages/homePage/homePage";
import AuthorizationPage from "../../pages/authorizationPage/authorizationPage";
import RegisterPage from "../../pages/registerPage/registerPage";
import BasketPage from "../../pages/basketPage/basketPage";
import PaymentPage from "../../pages/paymentPage/paymentPage";
import Categories from "../../pages/categoriesPage/categoriesPage";
import NotFoundPage from "../../pages/notFoundPage/notFoundPage";
import "../../App.scss";


function App() {
  const [authorization, setAuthorization] = React.useState(false);

  const onExitAuthorization = () => {
    setAuthorization(false);
  };

  const onAuthorization = () => {
    setAuthorization(!false);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Layout onExitAuthorization={onExitAuthorization} />}>
            <Route index element={<HomePage />} />
            <Route path={AppRoutes.Authorization} element={<AuthorizationPage onAuthorization={onAuthorization} />} />
            <Route path={AppRoutes.Register} element={<RegisterPage />} />
            <Route
              path={AppRoutes.BasketPage}
              element={
                <PrivateRoute
                  restrictedFor={authorization}
                  redirectTo={AppRoutes.Authorization}
                >
                  <BasketPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoutes.Categories} element={<Categories />} />
            <Route path={AppRoutes.PaymentPage} element={<PaymentPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
