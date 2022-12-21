import React, { useState, useEffect } from "react";
// import productImg from "../assets/imgaes/product_01.1.jpg";
import products from "../assets/fakeData/product";
// import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/foodDetails.css";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Ul/product-card/ProductCard";
import { useDispatch } from "react-redux";
import { addItem, calcTotal } from "../store/shopping-cart/CartSlice";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const { id } = useParams(); // useParams returns an object of key/val pair from the current url dynamic params

  const product = products.find((product) => product.id === id);

  const { title, price, image01 } = product;

  const [previewImg, setPreviewImg] = useState(product.image01);

  const relatedProducts = products.filter(
    (item) => item.category === product.category
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Product-details">
      <CommonSection title={product.title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="Food" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="Food" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="Food" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="Food" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product.title}</h2>
                <p className="product__price">
                  Price: <span>${product.price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{product.category}</span>
                </p>
                <button
                  className="product__btn"
                  onClick={() => {
                    dispatch(addItem({ id, price, image01, title }));
                    dispatch(calcTotal());
                  }}
                >
                  Add to cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6
                  className={tab === "desc" ? "tab__active" : null}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  onClick={() => setTab("rev")}
                  className={tab === "rev" ? "tab__active" : null}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{product.desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">John Thomas</p>
                    <p className="user__email"> johnthomas@email.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">John Thomas</p>
                    <p className="user__email"> johnthomas@email.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">John Thomas</p>
                    <p className="user__email"> johnthomas@email.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>

                  <form className="form">
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write a review"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <button
                      type="button"
                      className="product__btn"
                      onClick={(e) => handleSubmit}
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-4 mb-5">
              <h2>You might also like</h2>
            </Col>
            {relatedProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
