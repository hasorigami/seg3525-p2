import { Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import InstrumentsShop from "./pages/InstrumentsShop";
import BooksShop from "./pages/BooksShop";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="instruments" element={<InstrumentsShop />}></Route>
          <Route path="books" element={<BooksShop />}></Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<HomePage />} />
          
      </Routes>
    </div>


  );
}

export default App;
