import React from "react";
import { Card, Button } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
        {/* about section start */}
      <h1 className="about-heading-2 pb-4">ABOUT OUR FACILITIES</h1>
      <div className="d-flex justify-content-evenly align-items-center about-card">
        <div>
            {/* card start */}
          <Card className="p-3" style={{ width: "22rem" }}>
            <i className="fas fa-user-graduate about-icon"></i>
            <Card.Body>
              <Card.Title>Skilled Lecturers</Card.Title>
              <Card.Text>
                Aolaboraively eenable vira niche market Uniquely maintain hghly
                eficient prduct for and goaloriented human.
              </Card.Text>
              <Button className="btn btn-secondary">
                Read modern
                <span>
                  <i className="fas fa-angle-double-right"></i>
                </span>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="p-3" style={{ width: "22rem" }}>
            <i className="fas fa-book-medical about-icon"></i>
            <Card.Body>
              <Card.Title>Books & Library</Card.Title>
              <Card.Text>
                Aolaboraively eenable vira niche market Uniquely maintain hghly
                eficient prduct for and goaloriented human.
              </Card.Text>
              <Button className="btn btn-secondary">
                Read More
                <span>
                  <i className="fas fa-angle-double-right"></i>
                </span>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="p-3" style={{ width: "22rem" }}>
            <i class="fas fa-university about-icon"></i>
            <Card.Body>
              <Card.Title>Scholarship Facility</Card.Title>
              <Card.Text>
                Aolaboraively eenable vira niche market Uniquely maintain hghly
                eficient prduct for and goaloriented human.
              </Card.Text>
              <Button className="btn btn-secondary">
                Read More
                <span>
                  <i className="fas fa-angle-double-right"></i>
                </span>
              </Button>
            </Card.Body>
          </Card>
          {/* card end */}
        </div>
      </div>
    {/* about our university */}
      <h1 className="about-heading-2 pb-4">ABOUT OUR ENROLLMENT</h1>
      <div className="d-flex justify-content-evenly align-items-center about">
        <div>
          <i className="fas fa-user-graduate about-icon"></i>
          <h1 className="about-heading">2500</h1>
          <h4 className="about-text">Students Enrolled</h4>
        </div>
        <div>
          <i class="fas fa-trophy about-icon"></i>
          <h1 className="about-heading">912</h1>
          <h4 className="about-text">Best Awards Won</h4>
        </div>
        <div>
          <i class="fas fa-pencil-ruler about-icon"></i>
          <h1 className="about-heading">370</h1>
          <h4 className="about-text">Classes Completed</h4>
        </div>
        <div>
          <i class="fas fa-book-open about-icon"></i>
          <h1 className="about-heading">648</h1>
          <h4 className="about-text">Our Total Courses</h4>
        </div>
      </div>
    </div>
    // about end
  );
};

export default About;
