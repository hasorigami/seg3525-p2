import { Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import InstrumentsPage from "./pages/InstrumentsPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="instruments" element={<InstrumentsPage />}></Route>
          <Route path="books" element={<BooksPage />}></Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
      </Routes>
    </div>


  );
}

export default App;
