import "holderjs";
import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";


function InstrumentsPage() {
  return (
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <h1>Buy your instruments here.</h1>
    </div>
  );
}

export default InstrumentsPage;