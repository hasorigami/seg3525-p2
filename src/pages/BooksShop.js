import "holderjs";
import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";
import {Col, Container, Form, Row } from "react-bootstrap";
import ProductComponent from "../components/ProductComponent";

// book imports
import book1 from "../assets/images/books/alfred-piano1.jpg"
import book2 from "../assets/images/books/beethoven_sonata.jpg"
import book3 from "../assets/images/books/liszt_rhapsodies.jpg"
import book4 from "../assets/images/books/piano_adventures1.jpg"

function BooksShop() {

  const instruments=["Piano", "Guitar"]

  return (
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <h1>Buy our books!</h1>
      <Container>
        <Row>
          <Col>
            <ShoppingFilters 
              filters={instruments} 
              filterName="Instruments">
            </ShoppingFilters>
          </Col>
          <Col>
            <Products></Products>
          </Col>
        </Row>
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

function Products() {

  return(
    <div className="productsSection">
      <ProductComponent
        image={book1}
        title="Book"
        description="This is a piano book."
        price="20.00"
      />
      <ProductComponent
        image={book2}
        title="Book"
        description="This is a piano book."
        price="20.00"
      />
      <ProductComponent
        image={book3}
        title="Book"
        description="This is a piano book."
        price="20.00"
      />
      <ProductComponent
        image={book4}
        title="Book"
        description="This is a piano book."
        price="20.00"
      />

    </div>
  )
}


export default BooksShop;