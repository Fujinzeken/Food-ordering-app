import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import "../../../styles/cart.css";
import { toggle } from "../../../store/shopping-cart/ToggleSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((store) => store.cart);

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={() => dispatch(toggle())}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartItems.length === 0 ? (
            <h6 className="text-center mt-5">No Items Added to Cart</h6>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                price={item.price}
                title={item.title}
                image01={item.image01}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                id={item.id}
              />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button onClick={() => dispatch(toggle())}>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;
