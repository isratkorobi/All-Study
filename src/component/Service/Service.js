import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  const { title, author, description, img, date, price } = props.service;//distructure array
  return (
    <div> 
      {/* card start */}
      <Card className="card p-2" style={{ width: "20rem" }}>
        <Card.Img src={img} />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <div className="d-flex justify-content-between pt-2 pb-3">
            <div>
              <Card.Text className="card-span">
                <span>
                  <i className="fas fa-calendar-alt pe-2"></i>
                </span>
                {date}
              </Card.Text>
            </div>
            <div>
              <Card.Text className="card-span">
                <span>
                  <i className="fas fa-user pe-2"></i>
                </span>
                {author}
              </Card.Text>
            </div>
          </div>
          <Card.Text>{description}</Card.Text>

          <div className="d-flex justify-content-between">
            <div>
              <Card.Text className="card-span">
                <span>
                  <i className="fas fa-dollar-sign pe-2 card-text"></i>
                </span>
                {price}
              </Card.Text>
            </div>
            <div>
              <Card.Text className="icon">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* card end */}
    </div>
  );
};

export default Service;
