import React from "react";
import productImg from "../assets/imgaes/product_01.1.jpg";
// import products from "../assets/fakeData/product";
// import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/foodDetails.css";

const FoodDetails = () => {
  return (
    <Helmet title="Product-details">
      <CommonSection title="Product 01" />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item">
                  <img src={productImg} alt="Food" className="w-50" />
                </div>
                <div className="img__item">
                  <img src={productImg} alt="Food" className="w-50" />
                </div>
                <div className="img__item">
                  <img src={productImg} alt="Food" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={productImg} alt="Food" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">Pizza with Mushrooms</h2>
                <p className="product__price">
                  Price: <span>$34</span>
                </p>
                <p className="category mb-5">
                  Category: <span>Burger</span>
                </p>
                <button className="product__btn">Add to cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6 className="tab__active">Description</h6>
                <h6>Review</h6>
              </div>
              <div className="tab__content">
                <p>
                  Nisi consectetur esse adipisicing minim culpa ut id est amet
                  tempor excepteur.Do irure id nostrud ad occaecat velit non.
                  Laborum aute dolor id elit sit enim tempor incididunt
                  voluptate consectetur cupidatat. Anim incididunt cupidatat
                  culpa sunt adipisicing pariatur incididunt do incididunt nulla
                  do labore cillum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
