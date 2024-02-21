// product.jsx

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";  // Import Row and Col from react-bootstrap

function ProductCard({ product }) {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Card.Text>Category: {product.category}</Card.Text>
        <Card.Text>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </Card.Text>
        <button type="button" className="btn btn-primary">Add to Cart</button>
      </Card.Body>
    </Card>
  );
}

function EcommList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Store the response data in the 'products' state
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EcommList;
