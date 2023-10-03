import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const findProduct = (products, id) => {
  return products.find((product) => product.id === +id);
};

const ProductDetails = (props) => {
  const { productId } = useParams();
  const product = findProduct(props.products, productId);

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      amount: 1,
      price: product.price,
    });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Product Details</h1>
      <Card>
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{ maxHeight: "400px", width: "auto" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {`\u20B9 ${product.price.toFixed(2)}`}</Card.Text>
          <Button variant="primary" onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
