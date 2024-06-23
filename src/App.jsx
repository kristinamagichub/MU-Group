import "./App.css";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />

      <Promo />
      <Products />

      <Footer />
    </>
  );
}

export default App;
