import StoreNavbar from "./components/NavbarComponent";
import PageHeader from "./components/HeaderComponent";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <StoreNavbar />
      <HomePage />
      <p>Hello world!</p>
    </div>
  );
}

export default App;
