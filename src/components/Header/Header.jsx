import React, { useState, useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/imgaes/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/shopping-cart/ToggleSlice";

const nav__link = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  // {
  //   display: 'Checkout',
  //   path: '/checkout'
  // },
  // {
  //   display: 'Login',
  //   path: '/login'
  // },
  // {
  //   display: 'Register',
  //   path: '/register'
  // },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { totalQuantity } = useSelector((store) => store.cart);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const dispatch = useDispatch();

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };

    // return () => setIsScrolled(false);
  }, [isScrolled]);

  return (
    <header className={isScrolled ? "header__shrink" : "header"}>
      <Container>
        <nav className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Foodie Inc.</h5>
          </div>
          {/* ======== Menu ========= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__link.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ======== nav right icons ====== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={() => dispatch(toggle())}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
