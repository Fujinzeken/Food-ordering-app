import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/common-section/CommonSection";
import "../styles/login.css";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/home");
      })
      .catch((err) => {
        const errMessage = err.message;
        console.log(errMessage);
      });
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.

      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
      });

      navigate("/home");
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      // The email of the user's account used.
      // const email = err.customData.email;
      // // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(err);
      console.log(credential);
      // ...
    }
  };

  const handleGoogleSignupMobile = async () => {
    try {
      await signInWithRedirect(auth, provider);
      console.log(auth);
      const result = await getRedirectResult(auth);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
      });

      navigate("/home");
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      // The email of the user's account used.
      // const email = err.customData.email;
      // // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(err);
      console.log(credential);
      // ...
    }
  };
  return (
    <Helmet title="Login">
      {/* <AnimatedPage></AnimatedPage> */}
      <CommonSection title="Login" />
      <Container>
        <Row>
          <Col lg="6" md="6" className="m-auto mb-5 text-center">
            <form className="form mb-4" onSubmit={handleSubmit}>
              <div className="form__group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form__group">
                <input type="password" placeholder="Password" required />
              </div>

              <button type="submit" className="product__btn">
                Login
              </button>
            </form>
            <div className="sign__up-link">
              <Link to="/register">
                Don't have an account? <span className="signup">Sign up!</span>
              </Link>
              <button
                className="google__btn desktop"
                onClick={handleGoogleSignup}
              >
                Sign In with Google
              </button>
              <button
                className="google__btn mobile"
                onClick={handleGoogleSignupMobile}
              >
                Sign In with Google
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Login;
