import { Container, Row, Col, Image } from "react-bootstrap";
import "holderjs";

function PageHeader() {
  return(
    <div className="headerComponent">
      <Container>
        <div className="headerContents">
          <Image src="holder.js/100x100" rounded />
          <h1>Piano & Guitar Central</h1>
        </div>
      </Container>
    </div>
  )
}

export default PageHeader;