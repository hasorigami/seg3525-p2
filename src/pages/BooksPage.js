import "holderjs";
import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";


function BooksPage() {
  return (
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <h1>Buy our books!</h1>
    </div>
  );
}

export default BooksPage;