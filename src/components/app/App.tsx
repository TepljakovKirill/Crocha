import { HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "../../const";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../../pages/homePage/homePage";
import BasketPage from "../../pages/basketPage/basketPage";
import NotFoundPage from "../../pages/notFoundPage/notFoundPage";
import "../../App.scss";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={AppRoutes.BasketPage} element={<BasketPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
