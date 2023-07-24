import { Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ProductComponent(props) {
  const { t, i18n } = useTranslation();

  return(
    <>
      <Card style={{width: "18rem"}} className="componentCard mx-2 my-5">
        <Card.Img className="productImg" src={props.image}></Card.Img>
        <Card.Body>
          <Card.Title>${props.price} - {props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="standard">{t('addToCart')}</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductComponent;