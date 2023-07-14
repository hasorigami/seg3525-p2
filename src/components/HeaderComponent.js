import { Container, Row, Col, Image } from "react-bootstrap";
import "holderjs";
import logo from "../assets/images/ai-logo3.jpg"

function PageHeader() {
  return(
    <div className="headerComponent">
      <Container>
        <div className="headerContents">
          <Image src={logo} rounded width={"125"} />
          <h1>Piano & Guitar Central</h1>
        </div>
      </Container>
    </div>
  )
}

export default PageHeader;