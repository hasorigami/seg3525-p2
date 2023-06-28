import StoreNavbar from "./components/NavbarComponent"
import PageHeader from "./components/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <StoreNavbar />
      <p>Hello world!</p>
    </div>
  );
}

export default App;
