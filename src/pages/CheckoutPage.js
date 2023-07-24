import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";

import { useState } from "react";
import { Button, Col, Container, Form, ProgressBar, Row } from "react-bootstrap";

function CheckoutPage() {

  const [formPage, setFormPage] = useState(1);
  const pageCount = 4;

  function incrementFormPage() {
    setFormPage(formPage + 1);
    console.log(maxPage());
    console.log(typeof maxPage())
  }

  function decrementFormPage() {
    setFormPage(formPage - 1);
  }

  function maxPage() {
    return (formPage >= pageCount);
  }

  function minPage() {
    return (formPage <= 1);
  }
  

  return(
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <Container>
        <ProgressBar now={formPage * 100 / pageCount}></ProgressBar>
        <h1>Checkout (1 item)</h1>
        <FormPage1></FormPage1>
        <Button 
          onClick={decrementFormPage} 
          disabled={minPage()} 
          variant="default">
            Previous
        </Button>
        <Button 
          onClick={incrementFormPage} 
          disabled={maxPage()} 
          variant="default">
            Next
        </Button>

      </Container>
    </div>
  )
}

function FormPage1() {
  return(
    <div>
      <Form>
        <h2>Shipping address</h2>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Organisation name (optional)</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Row>
        <Col>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Province / State / Region</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default CheckoutPage;