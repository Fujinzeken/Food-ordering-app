import React from "react";
import "../styles/cartPage.css";
import CommonSection from "../components/Ul/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { calcTotal, removeItem } from "../store/shopping-cart/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((store) => store.cart);

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead className="text-center">
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Qunatity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6 className="cart__subtotal">
                  Subtotal:<span> ${totalAmount}</span>
                </h6>
                <p>Taxes and Shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="product__btn">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="product__checkout">
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { image01, title, price, quantity, id } = props.item;
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" className="w-100" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td
        className="text-center cart__item-del"
        onClick={() => {
          dispatch(removeItem(id));
          dispatch(calcTotal());
        }}
      >
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
