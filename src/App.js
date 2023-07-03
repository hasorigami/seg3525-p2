import { Routes, Route, BrowserRouter } from "react-router-dom";

// import pages
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import InstrumentsPage from "./pages/Instruments";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} />
              <Route index element={<HomePage />} />
              <Route path="instruments" element={InstrumentsPage}></Route>
              <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
