import React from "react";
import { useDispatch } from "react-redux";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cartItem.css";
import {
  removeItem,
  increase,
  decrease,
  calcTotal,
} from "../../../store/shopping-cart/CartSlice";

const CartItem = ({ id, title, price, image01, quantity, totalPrice }) => {
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-3 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="cart__product-price d-flex align-items-center gap-3">
              {quantity}X <span>${price}</span>
            </p>
            <div className="increase__decrease-btn d-flex align-items-center justify-content-between">
              <span
                className="increase__btn"
                onClick={() => {
                  dispatch(increase(id));
                  dispatch(calcTotal());
                }}
              >
                <i className="ri-add-line"></i>
              </span>
              <span className="number__btn">{quantity}</span>
              <sapn
                className="decrease__btn"
                onClick={() => {
                  dispatch(decrease(id));
                  dispatch(calcTotal());
                }}
              >
                <i className="ri-subtract-line"></i>
              </sapn>
            </div>
          </div>

          <span
            className="delete__btn"
            onClick={() => {
              dispatch(removeItem(id));
              dispatch(calcTotal());
            }}
          >
            {console.log(id)}
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
