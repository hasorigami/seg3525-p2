import { Button, Carousel, Container, Image } from "react-bootstrap";
import PageHeader from "../components/HeaderComponent";
import StoreNavbar from "../components/NavbarComponent";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "holderjs";

import piano_photo from "../assets/images/piano-photo.jpg"
import guitar_photo from "../assets/images/guitar-photo.jpg"
import ProductComponent from "../components/ProductComponent";

import book_cover from "../assets/images/books/alfred-piano1.jpg"

function HomePage() {

  const { t, i18n } = useTranslation();

  return(
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <HomeCarousel></HomeCarousel>
      <LearnAnInstrument></LearnAnInstrument>
    </div>
  )
}

function HomeCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return(
    <Container activeIndex={index} onSelect={handleSelect}>
      <Carousel>
        <Carousel.Item 
          className="w-100 homePageSlide">
          <img 
            className="w-100" 
            src={piano_photo} 
            alt="Photo of a piano."
          ></img>
          <Carousel.Caption className="carouselCaption">
            <h1>Pianos</h1>
            <p>Explore our high quality acoustic and digital pianos selection.</p>
            <Button className="shopButton">Shop now</Button>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item className="w-100 homePageSlide">
           <img 
            className="w-100" 
            src={guitar_photo} 
            alt="Photo of a guitar."
          ></img>

           <Carousel.Caption className="carouselCaption">
            <h1>Guitars</h1>
            <p>Classical or electric, we have options for you.</p>
            <Button className="shopButton">Shop now</Button>
           </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

function LearnAnInstrument() {
  return(
    <Container fluid className="learnInstrumentFluid">
      <Container className="learnInstrument">
        <h1>New to playing?</h1>
        <p>Guitar starter kit.</p>

        <ProductComponent
          title="Piano Book"
          description="Check this out!"
          image={book_cover}
          price="20.00"
        ></ProductComponent>

        <p>Piano starter kit.</p>

      </Container>
      
    </Container>
  )
}

export default HomePage;