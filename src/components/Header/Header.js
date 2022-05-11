import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
// import Clock from "../../UI/Clock";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <div className={`container ${styles.h_container}`}>
          <h5 style={{ margin: "0" }}>Soff Study</h5>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
