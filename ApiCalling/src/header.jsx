// Header.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
          <h1 className="mb-0">
            <FontAwesomeIcon icon={faTruckFast} /> CodeoEcommerce
          </h1>
          <nav>
            <ul className="list-unstyled mb-0">
              <li className="d-inline-block me-3">
                <a href="/">Home</a>
              </li>
              <li className="d-inline-block me-3">
                <a href="/products">Products</a>
              </li>
              <li className="d-inline-block">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
