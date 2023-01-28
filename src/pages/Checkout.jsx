import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/Ul/common-section/CommonSection";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
const Checkout = () => {
  const publicKey = "pk_test_01e835ca492fa473b9c03a0449283470ddaec319";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(undefined);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [PostalAddress, setPostalAddress] = useState("");
  const navigate = useNavigate();
  const { totalAmount } = useSelector((store) => store.cart);
  const shippingCost = 30;

  const total = totalAmount + shippingCost;

  const shippingInfo = [];

  const amount = total * 100;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      number,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      navigate("/");
    },
    onClose: () => alert("Wait! You sure ypu want to leave???"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: name,
      email: email,
      phoneNumber: number,
      country: country,
      city: city,
      PostalAddress: PostalAddress,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <Container>
        <Row>
          <Col lg="8" md="6">
            <h5 className="mb-4">Shipping Address</h5>
            <form action="" className="checkout__form" onSubmit={handleSubmit}>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Postal Address"
                  value={PostalAddress}
                  onChange={(e) => setPostalAddress(e.target.value)}
                  required
                />
              </div>
              <PaystackButton
                className="product__btn mb-5"
                {...componentProps}
              />
            </form>
          </Col>
          <Col lg="4" md="6">
            <div className="checkout__bill">
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Subtotal: <span>${totalAmount}</span>
              </h6>
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Shipping Cost: <span>${shippingCost}</span>
              </h6>
              <div className="checkout__total">
                <h5 className="d-flex align-items-center justify-content-between">
                  Total: <span>${total}</span>
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Checkout;
