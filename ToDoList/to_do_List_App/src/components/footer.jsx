import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

function Footer() {
  return (
    <footer className="bg-light text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              {/* Social media icons */}
              <a href="#" className="me-3">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="me-3">
                <FaTwitter size={24} />
              </a>
              <a href="#">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Subscription</h5>
            <p>Subscribe for the latest Tech Updates</p>
          </div>
          <div className="col-md-4">
            <h5>Email</h5>
            <p>SUBSCRIBE</p>
          </div>
        </div>
        <hr />
        <p className="mb-0">
          &copy; 2024 | Made With 💛 By Codeograph Solutions | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;