import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';


import { Container, Table } from "react-bootstrap";  // Import Table from react-bootstrap

function ProductList() {
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>
                <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                {product.rating.rate} ({product.rating.count} reviews)
              </td>
              <td>
              <div>
      <button>
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
      <button>
        <FontAwesomeIcon icon={faCheck} /> Edit
      </button>
    </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductList;
