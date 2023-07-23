import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";
import { Container, Form } from "react-bootstrap";


function LoginPage() {
  return (
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <h1>Log in</h1>
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
        </Form>

        
      </Container>
    </div>
  );
}

export default LoginPage;