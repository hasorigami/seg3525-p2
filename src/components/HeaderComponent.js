import { Container, Row, Col, Image } from "react-bootstrap";
import "holderjs";
import logo from "../assets/images/StoreLogo1.png"
import { useTranslation } from "react-i18next";

function PageHeader() {

  const { t, i18n } = useTranslation();

  return(
    <div className="headerComponent">
      <Container>
        <div className="headerContents">
          <Image src={logo} height={"125"} />
        </div>
      </Container>
    </div>
  )
}

export default PageHeader;