import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import hero from "../assets/imgaes/hero.png";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Category from "../components/Ul/category/Category";
import featureImg1 from "../assets/imgaes/service-01.png";
import featureImg2 from "../assets/imgaes/service-02.png";
import featureImg3 from "../assets/imgaes/service-03.png";

import products from "../assets/fakeData/product";

import foodCategoryImg01 from "../assets/imgaes/hamburger.png";
import foodCategoryImg02 from "../assets/imgaes/pizza.png";
import foodCategoryImg03 from "../assets/imgaes/bread.png";
import categoryImg3 from "../assets/imgaes/category-03.png";

import whyimg from "../assets/imgaes/location.png";
import networkImg from "../assets/imgaes/network.png";
import ProductCard from "../components/Ul/product-card/ProductCard";

import TestimonialSlider from "../components/Ul/slider/TestimonialSlider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg1,
    desc: "Qui nostrud reprehenderit sunt officia cupidatat ipsum enim cupidatat proident veniam pariatur mollit",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg2,
    desc: "Quis consectetur reprehenderit in eiusmod sint id veniam pariatur est.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg3,
    desc: "Sint eu esse sunt proident quis eiusmod ipsum sint do id.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "All") {
      setAllProducts(products);
    }

    if (category === "Burger") {
      const BurgerCategory = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(BurgerCategory);
    }

    if (category === "Pizza") {
      const PizzaCategory = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(PizzaCategory);
    }
    if (category === "Bread") {
      const PasteryCategory = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(PasteryCategory);
    }
    if (category === "African Dish") {
      const AfricanCategory = products.filter(
        (item) => item.category === "African Dish"
      );
      setAllProducts(AfricanCategory);
    }
  }, [category]);
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait, Food
                  <span> is right at your door!</span>
                </h1>
                <p>
                  Nostrud pariatur consectetur et sunt qui in elit tempor et
                  elit.
                </p>
                <div className="hero__btn">
                  <button className="order__btn">
                    Order Now! <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-3">
                  <p className="d-flex align-items-center gap-2">
                    <span className="delivery__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    Free Delivery
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="delivery__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% secure payments
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__image">
                <img src={hero} alt="pizza delivery" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">what we serve</h5>
              <h2 className="feature__title">Just sit back and order,</h2>
              <h2 className="feature__title">
                lets take care of your <span> taste buds</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                some jagoons i need to find a lorem generator for my work
              </p>
              <p className="feature__text">
                some jagoons i need to find a lorem generator for my work
              </p>
            </Col>
            {featureData.map((item, i) => (
              <Col lg="4" md="6" sm="6" key={i} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-3">
                <button
                  className={`all__btn ${
                    category === "All" ? "foodbtnActive" : "none"
                  }`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Burger" ? "foodbtnActive" : "none"
                  }`}
                  onClick={() => setCategory("Burger")}
                >
                  <img
                    src={foodCategoryImg01}
                    alt="food-category"
                    className="food__category_img"
                  />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Pizza" ? "foodbtnActive" : "none"
                  }`}
                  onClick={() => setCategory("Pizza")}
                >
                  <img
                    src={foodCategoryImg02}
                    alt=""
                    className="food__category_img"
                  />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Bread" ? "foodbtnActive" : "none"
                  }`}
                  onClick={() => setCategory("Bread")}
                >
                  <img
                    src={foodCategoryImg03}
                    alt=""
                    className="food__category_img"
                  />
                  Pastery
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "African Dish" ? "foodbtnActive" : "none"
                  }`}
                  onClick={() => setCategory("African Dish")}
                >
                  <img
                    src={categoryImg3}
                    alt=""
                    className="food__category_img"
                  />
                  African Dish
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img
                src={whyimg}
                alt="why-choose Foodie inc?"
                className="w-100"
              />
            </Col>
            <Col lg="6" md="6">
              <div className="why__foodie-inc">
                <h2 className="foodie__inc-title mb-3">
                  Why <span>Foodie Inc?</span>
                </h2>
                <p className="foodie__inc-desc choose__us-desc">
                  Fugiat sit nisi reprehenderit veniam proident sint ea aute
                  anim. Duis nisi non ullamco ipsum est id culpa laboris eiusmod
                  irure mollit ipsum consectetur. Adipisicing labore esse
                  deserunt id pariatur duis exercitation deserunt aliquip
                  consectetur consequat minim. Consectetur dolore velit aute ut
                  reprehenderit officia aliqua anim voluptate Lorem nisi. Velit
                </p>

                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Fresh and tasty Food.
                    </p>
                    <p className="choose__us-desc">
                      Adipisicing ullamco consectetur mollit aliqua eu labore.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Quality for Your money, Quality for your taste buds.
                    </p>
                    <p className="choose__us-desc">
                      Adipisicing ullamco consectetur mollit aliqua eu labore.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Order from any location
                    </p>
                    <p className="choose__us-desc">
                      Adipisicing ullamco consectetur mollit aliqua eu labor.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mb-4">
                <h4 className="testimonial__title mb-4">Testimonial</h4>
                <h2 className="testimonial__subtitle">
                  What our <span>Customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Incididunt Lorem non deserunt commodo laborum sint consectetur
                  id excepteur qui. Ut consequat velit laboris anim.Quis nulla
                  pariatur ea non et duis dolore enim pariatur excepteur cillum
                  et cupidatat enim.
                </p>
                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
