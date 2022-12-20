import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Cart from "../Ul/cart/Cart.jsx";
import { useSelector } from "react-redux";

const Layout = () => {
  const { cartIsVisible } = useSelector((store) => store.toggle);

  return (
    <div>
      <Header />
      {cartIsVisible && <Cart />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
