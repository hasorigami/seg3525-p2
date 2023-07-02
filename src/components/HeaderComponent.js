import { Container, Row, Col } from "react-bootstrap";


function PageHeader() {
  return(
    <div className="headerComponent">
      <Container>
        <Row>
          <Col>
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