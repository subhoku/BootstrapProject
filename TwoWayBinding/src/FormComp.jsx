import React, { useState } from 'react';
import './myform.css'; // Import your custom CSS file
import { Form, Button, Row, Col, Table } from 'react-bootstrap';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    availability: false,
    degree: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="my-form">
      <Row>
        <Col>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Male"
            name="gender"
            value="male"
            onChange={handleInputChange}
            inline
          />
          <Form.Check
            type="radio"
            label="Female"
            name="gender"
            value="female"
            onChange={handleInputChange}
            inline
          />
        </div>
      </Form.Group>

      <Form.Group controlId="availability">
        <Form.Label>Availability</Form.Label>
        <Form.Check
          type="switch"
          label="Available"
          name="availability"
          checked={formData.availability}
          onChange={() =>
            setFormData({ ...formData, availability: !formData.availability })
          }
        />
      </Form.Group>

      <Form.Group controlId="degree">
        <Form.Label>Degree</Form.Label>
        <Form.Control
          as="select"
          name="degree"
          value={formData.degree}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Degree</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          

      {/* Display form data in a table */}
      <Table striped bordered responsive className="my-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{formData.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{formData.lastName}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{formData.gender}</td>
          </tr>
          <tr>
            <td>Availability</td>
            <td>{formData.availability ? 'Available' : 'Not Available'}</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>{formData.degree}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MyForm;
