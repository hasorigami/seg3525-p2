import "holderjs";
import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";
import { Button, Card, Container, Form } from "react-bootstrap";

import book_cover from "../assets/images/piano-book-cover1.jpg"


function BooksShop() {

  const instruments=["Piano", "Guitar"]

  return (
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <h1>Buy our books!</h1>
      <Container>
        <ShoppingFilters 
        filters={instruments} 
        filterName="Instruments">

        </ShoppingFilters>
        <ShopProduct></ShopProduct>
      </Container>
    </div>
  );
}

function ShoppingFilters(props) {
  return(
    <div>
      <Form>
        <h6>{props.filterName}</h6>
        {props.filters.map(filter => <Form.Check label={filter}></Form.Check>)}
      </Form>
    </div>
  )
}

function ShopProduct() {
  return(
    <div>
      <Card style={{width: "18rem"}}>
        <Card.Img src={book_cover}></Card.Img>
        <Card.Body>
          <Card.Title>Piano Beginner Book</Card.Title>
          <Card.Text>This book will teach you the basics of piano.  </Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}


export default BooksShop;