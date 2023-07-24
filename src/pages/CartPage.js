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
        <p>Cart total: $100.00</p>
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
          <h3>Piano book 1</h3>
          <p>Description here</p>
        </Col>
      </Row>

      
    </div>
  )
}

export default CartPage;