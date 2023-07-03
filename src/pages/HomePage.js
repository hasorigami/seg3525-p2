import { Container, Image } from "react-bootstrap";
import PageHeader from "../components/HeaderComponent";
import StoreNavbar from "../components/NavbarComponent";
import "holderjs";

function HomePage() {
  return(
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <LearnAnInstrument />
    </div>
  )
}

function LearnAnInstrument() {
  return(
    <Container className="learnInstrument">
      <h1>New to playing? Browse here.</h1>
      <Image src="holder.js/1300x300"></Image>
    </Container>
  )
}



export default HomePage;