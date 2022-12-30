import React from "react";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import logo from "../../assets/imgaes/res-logo.png";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Foodie Inc.</h5>
              <p>some jagoons i need to find a lorem generator for my work</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>off days</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Location: 30, Ayanwale, VI, Lagos.</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 08123456789</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: foodyinc@yahoo.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p className="footer__word">Subscribe our Newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              &copy; 2022, Foody Inc. All right reserved.{" "}
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="facebook.com">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="instagram.com">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="twitter.com">
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to="linkedin.com">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
