import { Carousel, Container, Image } from "react-bootstrap";
import PageHeader from "../components/HeaderComponent";
import StoreNavbar from "../components/NavbarComponent";
import { useState } from "react";
import "holderjs";

import piano_photo from "../assets/images/piano-photo.jpg"
import guitar_photo from "../assets/images/guitar-photo.jpg"

function HomePage() {
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
          <Carousel.Caption>
            <h1>TEST</h1>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item className="w-100 homePageSlide">
           <img 
            className="w-100" 
            src={guitar_photo} 
            alt="Photo of a guitar."
          ></img>

           <Carousel.Caption>
            <h1>Slide 2</h1>
           </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

function LearnAnInstrument() {
  return(
    <Container className="learnInstrument">
      <h1>New to playing? Browse here.</h1>
      <Image src="holder.js/1300x300"></Image>
    </Container>
  )
}

export default HomePage;