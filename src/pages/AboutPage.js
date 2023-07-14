import "holderjs";
import StoreNavbar from "../components/NavbarComponent";
import PageHeader from "../components/HeaderComponent";
import { Container } from "react-bootstrap";


function AboutPage() {
  return (
    <div>
      <PageHeader></PageHeader>
      <StoreNavbar></StoreNavbar>
      <AboutUs></AboutUs>
    </div>
  );
}

function AboutUs() {
  return(
    <div>
      <Container>
        <h1>About us</h1>
        <p>
          At Piano & Guitar Central, we are passionate about the timeless beauty and versatility of pianos and guitars. We understand that music is not just a hobby but a way of life for many, and we strive to provide exceptional instruments and resources to help you embark on a melodious journey.
        </p>
        <p>
          Whether you are a beginner, an intermediate player, or an expert musician, our store is designed to cater to your musical aspirations. We offer a wide selection of pianos and guitars, including acoustic, electric, and digital models, sourced from renowned brands known for their craftsmanship and dedication to quality.
        </p>
        <p>
          In addition to our impressive instrument collection, we also stock a range of educational books that serve as valuable companions to your musical pursuits. These books cover various genres, techniques, and theory to enhance your playing skills and expand your musical horizons.
        </p>
        <p>
          Our knowledgeable and friendly staff members are passionate musicians themselves, ready to assist you in finding the perfect instrument that resonates with your unique style and preferences. We believe that every musician deserves personalized attention and guidance, and we take pride in offering a personalized shopping experience to all our customers.
        </p>
        <p>
          At Piano & Guitar Central, we are committed to providing not only top-quality instruments but also exceptional customer service. We prioritize your satisfaction and strive to build lasting relationships with our customers. Whether you're a beginner taking your first steps into the world of music or an experienced player seeking an upgrade, we are here to support you every step of the way.
        </p>
        <p>
          Explore our collection online or visit our store to experience the rich sounds, exquisite craftsmanship, and the undeniable magic of pianos and guitars. Let us help you unlock your musical potential and create beautiful melodies that resonate with your soul.
        </p>
        <p>
          Welcome to Piano & Guitar Central, where passion for music meets exceptional instruments and unwavering dedication to your musical journey.
        </p>
      </Container>
    </div>
  )
}

export default AboutPage;