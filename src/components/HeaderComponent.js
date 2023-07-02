import { Container, Row, Col, Image } from "react-bootstrap";
import "holderjs";

function PageHeader() {
  return(
    <div className="headerComponent">
      <Container>
        <Row>
          <Col>
            <Image src="holder.js/200x200" rounded /> 
            <h1>test</h1>
          </Col>
          <Col>
            <h1>Test2</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageHeader;