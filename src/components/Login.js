import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";
//icons
import google from "../assets/google.svg";
//styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Wellcome to My World</h2>
        <div
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
          className={styles.button}
        >
          <img src={google} alt="google" />
          sign in with google
        </div>
      </div>
    </div>
  );
};

export default Login;
