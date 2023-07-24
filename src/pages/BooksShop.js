import "holderjs";
import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";
import {Button, Col, Container, Form, Row } from "react-bootstrap";
import ProductComponent from "../components/ProductComponent";

// book cover imports
import book1 from "../assets/images/books/alfred-piano1.jpg";
import book2 from "../assets/images/books/beethoven_sonata.jpg";
import book3 from "../assets/images/books/liszt_rhapsodies.jpg";
import book4 from "../assets/images/books/piano_adventures1.jpg";
import book5 from "../assets/images/books/beethoven_furelise.jpg";
import book6 from "../assets/images/books/alfred_guitar1.jpg";
import book7 from "../assets/images/books/alfred_guitar2.jpg";
import book8 from "../assets/images/books/classical_guitar_collection.jpg";
import book9 from "../assets/images/books/ragtime_jazz1_piano.jpg";
import { useTranslation } from "react-i18next";

function BooksShop() {
  const instruments=["Piano", "Guitar"]
  const difficulty=["Elementary", "Begginer", "Intermediate", "Advanced"]
  const authors=["Alfred", "Faber", "Franz Listz", "Ludwig Van Beethoven"]
  const genres = ["Classical", "Jazz"]


  return (
    <div className="shopPage">
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <Container>
        <h1 className="my-3 py-2">Book shop</h1>
        <Row>
          <Col xs={2}>
            <ShoppingFilters
              filters={instruments} 
              filterName="Instrument">
            </ShoppingFilters>
            <ShoppingFilters
              filters={difficulty}
              filterName="Difficulty"
            />
            <ShoppingFilters
              filters={authors}
              filterName="Author / Composer"
            />
            <ShoppingFilters
              filters={genres}
              filterName="Genre"
            />
            <Button variant="standard" className="my-3">Apply</Button>
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
        image={book1}
        title={t('titleBook1')}
        description={t('descBook1')}
        price="20.00"
      />
      <ProductComponent
        image={book2}
        title="Beethoven: Sonata in C Minor, Opus 13"
        description="Beethoven's complete Piano Sonata No. 8 in C minor (&quot;Pathétique&quot;)."
        price="10.00"
      />
      <ProductComponent
        image={book3}
        title="Hungarian Rhapsodies, Volume I"
        description="Listz's Hungarian Rhapsodies 1 to 8."
        price="35.00"
      />
      <ProductComponent
        image={book4}
        title={t('titleBook2')}
        description={t('descBook2')}
        price="20.00"
      />
      <ProductComponent
        image={book5}
        title="Beethoven Fur Elise"
        description="Beethoven's Bagatelle No. 25 is an iconic piece in classical repertoire."
        price="8.00"
      />
      <ProductComponent
        image={book6}
        title={t('titleBook3')}
        description={t('descBook3')}
        price="15.00"
      />
      <ProductComponent
        image={book7}
        title={t('titleBook4')}
        description={t('descBook4')}
        price="15.00"
      />
      <ProductComponent
        image={book8}
        title="The Classical Guitar Collection"
        description="An assorted collection of great pieces arranged for the classical guitar."
        price="20.00"
      />
      <ProductComponent
        image={book9}
        title="Jazz Rag & Blues"
        description="Enjoy these fun begginer pieces to spice up your learning adventure."
        price="20.00"
      />

    </div>
  )
}


export default BooksShop;