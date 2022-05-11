import React from "react";
import styles from "./MyButton.module.css";
const Mybutton = ({ children, fun }) => {
  return (
    <button className={styles.btn} onClick={fun}>
      {children}
    </button>
  );
};

export default Mybutton;
