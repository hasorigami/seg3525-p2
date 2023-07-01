import { Container } from "react-bootstrap";


function HomePage() {
  return(
    <div>
      <LearnAnInstrument />
    </div>
  )
}

function LearnAnInstrument() {
  return(
    <Container>
      Learn an instrument here
    </Container>
  )
}

export default HomePage;