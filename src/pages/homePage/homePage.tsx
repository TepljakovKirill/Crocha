import { Helmet } from "react-helmet-async";

import Nav from "../../components/nav/nav";
import Bunner from "../../components/bunner/bunner";
import Promotion from "../../components/promotion/promotion";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Croch - Главная страница</title>
      </Helmet>
      <Nav />
      <Bunner />
      <Promotion />
    </>
  );
}

export default HomePage;
