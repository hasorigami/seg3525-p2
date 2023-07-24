import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import piano_book1 from "../assets/images/books/liszt_rhapsodies.jpg";
import { LinkContainer } from "react-router-bootstrap";


function CartPage() {
  return (
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <Container>
        <h1>Shopping cart</h1>
        <CartItemsList></CartItemsList>
        <h2 className="mb-4">Cart total: $100.00</h2>
        <LinkContainer to='/checkout'>
          <Button variant="standard">Proceed to checkout</Button>
        </LinkContainer>
      </Container>
    </div>
  );
}

function CartItemsList() {
  return(
    <>
      <ul>
        <CartItem></CartItem>
      </ul>
    </>
  )
}

function CartItem(props) {
  return(
    <div className="cartItem">
      <Row>
        <Col md={3}>
          <Image src={piano_book1}></Image>
        </Col>
        <Col>
          <h3>Hungarian Rhapsodies, Volume I</h3>
          <p>Listz's Hungarian Rhapsodies 1 to 8.</p>
          <h4>Quanity: 1</h4>
        </Col>
      </Row>

      
    </div>
  )
}

export default CartPage;