import { Button, Card } from "react-bootstrap";

function ProductComponent(props) {
  return(
    <>
      <Card style={{width: "18rem"}}>
        <Card.Img src={props.image}></Card.Img>
        <Card.Body>
          <Card.Title>${props.price} - {props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductComponent;