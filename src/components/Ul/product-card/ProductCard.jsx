import React from "react";
import "../../../styles/productCard.css";
import { useDispatch } from "react-redux";
import { addItem, calcTotal } from "../../../store/shopping-cart/CartSlice";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { id, title, image01, price } = props.item;
  return (
    <div className="product__item">
      <Link to={`/foods/${id}`}>
        <div className="product__img">
          <img src={image01} alt="product-img" className="w-50" />
        </div>
      </Link>
      <div className="product__content">
        <Link to={`/foods/${id}`}>
          <h5>{title}</h5>
        </Link>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <span className="product__price">${price}</span>
          <button
            className="product__btn"
            onClick={() => {
              dispatch(addItem({ id, title, image01, price }));
              dispatch(calcTotal());
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
