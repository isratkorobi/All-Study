import React from "react";
import { Button, Form, Nav } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {

  return (
    // footer
    <div className="container-fluid">
      <div className="d-flex justify-content-between footer">
        <div className="col-md-3">
          <h4>STUDY TIMINGS</h4>
          <div className="d-flex pt-4 justify-content-evenly align-items-center">
            <i className="far fa-clock nav-icon">
              <span> MON - FRI 9:00 AM - 3:00 PM</span>
            </i>
          </div>
          <br />
          <div className="d-flex justify-content-evenly align-items-center">
            <i className="far fa-clock nav-icon">
              <span> SAT 9:00 AM - 1:00 PM</span>
            </i>
          </div>
        </div>

        <div className="col-md-3">
          <h4>CONTACT US</h4>
          <div className="d-flex justify-content-center align-items-center">
            <div className="foot-contact">
              <i className="fas fa-home nav-icon pe-2"></i>
              <span>New Chokoya Road, USA.</span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="foot-contact">
              <i className="fas fa-phone nav-icon pe-2"></i>
              <span> +8801 923 970 212, 0125897</span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="foot-contact">
              <i className="fab fa-google nav-icon pe-2"></i>
              <span>Email@admin LabArtisan</span>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <h4>QUICK LINKS</h4>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <i className="fas fa-graduation-cap nav-icon"></i>
            </div>
            <div>
              <Nav.Link className="nav-menu" href="/home">
                Home
              </Nav.Link>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div>
              <i className="fas fa-users nav-icon"></i>
            </div>
            <div>
              <Nav.Link className="nav-menu" href="/about">
                About
              </Nav.Link>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div>
              <i className="fas fa-university nav-icon"></i>
            </div>
            <div>
              <Nav.Link className="nav-menu" href="/service">
                Service
              </Nav.Link>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div>
              <i className="fas fa-address-card nav-icon"></i>
            </div>
            <div>
              <Nav.Link className="nav-menu" href="/contact">
                Contact
              </Nav.Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <Form>
            <Form.Group className="mb-2 w-50 ms-5" controlId="formBasicEmail">
              <span>
                <h4>EMAIL ADDRESS:</h4>
              </span>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button className="btn btn-light me-5" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
