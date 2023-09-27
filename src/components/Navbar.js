import React from "react";
//styles
import styles from "./Navbar.module.css";

const Navbar = ({ LogoutHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>SM-gram</div>
      <div className={styles.logout} onClick={LogoutHandler}>
        Log Out
      </div>
    </div>
  );
};

export default Navbar;
