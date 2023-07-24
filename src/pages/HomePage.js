import { Button, Carousel, Container, Image } from "react-bootstrap";
import PageHeader from "../components/HeaderComponent";
import StoreNavbar from "../components/NavbarComponent";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "holderjs";

import piano_photo from "../assets/images/piano-photo.jpg"
import guitar_photo from "../assets/images/guitar-photo.jpg"
import ProductComponent from "../components/ProductComponent";

import book1 from "../assets/images/books/alfred-piano1.jpg";
import book4 from "../assets/images/books/piano_adventures1.jpg";
import dpiano1 from "../assets/images/instruments/alesis_digital_piano.png";
import book6 from "../assets/images/books/alfred_guitar1.jpg";
import book7 from "../assets/images/books/alfred_guitar2.jpg";
import cguitar1 from "../assets/images/instruments/valencia_classical_guitar.webp"
import { t } from "i18next";

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
    <Container activeIndex={index} onSelect={handleSelect} className="my-3">
      <Carousel>
        <Carousel.Item 
          className="w-100 homePageSlide">
          <img 
            className="w-100" 
            src={piano_photo} 
            alt="Photo of a piano."
          ></img>
          <Carousel.Caption className="carouselCaption">
            <h1>{t('slideTitle1')}</h1>
            <p>{t('slideCaption1')}</p>
            <Button className="shopButton" variant="standard">{t('shopButton')}</Button>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item className="w-100 homePageSlide">
           <img 
            className="w-100" 
            src={guitar_photo} 
            alt="Photo of a guitar."
          ></img>

           <Carousel.Caption className="carouselCaption">
            <h1>{t('slideTitle2')}</h1>
            <p>{t('slideCaption2')}</p>
            <Button className="shopButton" variant="standard">{t('shopButton')}</Button>
           </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

function LearnAnInstrument() {
  return(
    <Container fluid className="learnInstrumentFluid my-3">
      <Container className="learnInstrument">
        <h1>{t('newTitle')}</h1>
        <h6>{t('newLabel')}</h6>
        <div className="kit">
          <h1 className="pageTitle">{t('kit1')}</h1>
          <div className="kitContent d-flex justify-content-center">
            <ProductComponent
              image={book1}
              title={t('titleBook1')}
              description={t('descBook1')}
              price="20.00"
            />
            <h2>+</h2>
            <ProductComponent
              image={book4}
              title={t('titleBook2')}
              description={t('descBook2')}
              price="20.00"
            />
            <h2>+</h2>
            <ProductComponent
              image={dpiano1}
              title={t('titleProd1')}
              description={t('descProd1')}
              price="300.00"
            />  

          </div>
        </div>

        <div className="kit">
          <h1 className="pageTitle mt-5">{t('kit2')}</h1>
          <div className="kitContent d-flex justify-content-center">
            <ProductComponent
              image={book6}
              title={t('titleBook3')}
              description={t('descBook3')}
              price="15.00"
            />
            <h2>+</h2>
            <ProductComponent
              image={book7}
              title={t('titleBook4')}
              description={t('descBook4')}
              price="15.00"
            />
            <h2>+</h2>
            <ProductComponent
              image={cguitar1}
              title={t('titleProd2')}
              description={t('descProd2')}
              price="500.00"
            />
          </div>
        </div>
        <h1></h1>
      </Container>
      
    </Container>
  )
}

export default HomePage;