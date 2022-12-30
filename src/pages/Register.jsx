import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/common-section/CommonSection";
import "../styles/login.css";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db, provider } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
// import AnimatedPage from "../components/AnimatedPage";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log(res.user);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: fullName,
        email: email,
      });
      navigate("/home");
    } catch (error) {
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }
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
  return (
    <Helmet title="Register">
      {/* <AnimatedPage></AnimatedPage> */}
      <CommonSection title="Register" />
      <Container>
        <Row>
          <Col lg="6" md="6" className="m-auto mb-5 text-center">
            <form className="form mb-4" onSubmit={handleSubmit}>
              <div className="form__group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form__group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form__group">
                <input type="password" placeholder="Password" required />
              </div>

              <button type="submit" className="product__btn">
                Register
              </button>
            </form>
            <div className="sign__up-link">
              <Link to="/login">
                Already have an account?{" "}
                <span className="signup">Sign In!</span>
              </Link>
              <button className="google__btn" onClick={handleGoogleSignup}>
                Sign up with Google
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Register;
