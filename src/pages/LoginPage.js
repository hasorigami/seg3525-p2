import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


function LoginPage() {
  return (
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <div>
        <Row className="justify-content-md-center">
          <Col className="col-lg-6">
            <h1 className="pageTitle py-3">Log in</h1>
            <Container>
              <Form>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="name@email.com"></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                />
              </Form>
              <div className="d-grid gap-2">
                <Button variant="standard" className="my-4">Log in</Button>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LoginPage;