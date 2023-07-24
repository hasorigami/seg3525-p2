import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";

import dpiano1 from "../assets/images/instruments/alesis_digital_piano.png"
import dpiano2 from "../assets/images/instruments/rolandfp10_digital_piano.jpg"
import cguitar1 from "../assets/images/instruments/valencia_classical_guitar.webp"
import eguitar1 from "../assets/images/instruments/strat_electric_guitar.jpg"
import ProductComponent from "../components/ProductComponent";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";


function InstrumentsShop() {
  const guitars=["Acoustic", "Electric", "Classical"]
  const pianos=["Digital", "Acoustic"]
  return (
    <div className="shopPage">
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <Container>
        <h1 className="my-3 py-2">Instrument shop</h1>
        <Row>
          <Col xs={2}>
            <ShoppingFilters
              filters={guitars} 
              filterName="Guitar type">
            </ShoppingFilters>
            <ShoppingFilters
              filters={pianos} 
              filterName="Piano type">
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

export default InstrumentsShop;

function ShoppingFilters(props) {
  return(
    <div>
      <Form>
        <h6 className="my-3">{props.filterName}</h6>
        {props.filters.map(filter => <Form.Check label={filter}></Form.Check>)}
      </Form>
    </div>
  )
}

function Products() {

  const { t, i18n } = useTranslation();

  return(
    <div className="shop">
      <ProductComponent
        image={dpiano1}
        title={t('titleProd1')}
        description={t('descProd1')}
        price="300.00"
      />
      <ProductComponent
        image={dpiano2}
        title="Alesis Digital Piano"
        description="Digital piano with 88 fully-weighed keys."
        price="300.00"
      />
      <ProductComponent
        image={cguitar1}
        title={t('titleProd2')}
        description={t('descProd2')}
        price="500.00"
      />
      <ProductComponent
        image={eguitar1}
        title="Alesis Digital Piano"
        description="Digital piano with 88 fully-weighed keys."
        price="300.00"
      />
    </div>
  )
}