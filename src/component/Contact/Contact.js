import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      {/* contact start */}
      <div className="mt-5">
        <div className="w-50 m-auto mt-5 pt-5 align-center justify-content-center contact">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="from-text">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="from-text">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="btn btn-secondary contact-btn" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="col-md-6"></div>
    </div>
  );
};

export default Contact;
