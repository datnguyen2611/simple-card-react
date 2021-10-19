import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import axios from "axios";

import { CardContext } from "../contexts/Card";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: []
    };
  }

  componentDidMount() {
    axios.get("https://rr21b.sse.codesandbox.io/products").then((res) => {
      this.setState({
        Products: res.data
      });
    });
  }
  render() {
    const { Products } = this.state;
    return (
      <Container>
        <Row>
          {Products.map((product) => (
            <Col sm="4">
              <div>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={product.imagesUrl}
                    alt={product.description}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <CardContext.Consumer>
                      {({ addToCard }) => (
                        <Button onClick={() => addToCard(product)}>
                          Add to cart
                        </Button>
                      )}
                    </CardContext.Consumer>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Products;
