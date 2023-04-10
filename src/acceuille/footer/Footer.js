import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">About Us</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/dali.magri.1/">Facebook</a></li>
              
              <li><a href="https://www.instagram.com/dali_magri/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p className="mb-0">Copyright © {new Date().getFullYear()}
        <a href="https://example.com/"> Example.com</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
