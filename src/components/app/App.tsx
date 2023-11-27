import Header from "../header/header";
import Nav from "../nav/nav";
import "../../App.scss";
import Bunner from "../../components/bunner/bunner";
import Promotion from "../promotion/promotion";
import Footer from "../footer/footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Bunner />
      <Promotion />
      <Footer />
    </>
  );
}

export default App;
