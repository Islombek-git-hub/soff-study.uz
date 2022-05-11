import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyCard.module.css";
import { FiArrowUpRight } from "react-icons/fi";
const Mycard = ({ title, url, img }) => {
  return (
    <Link to={`/${url}`}>
      <div className={styles.card}>
        <p>{title}</p>
        <img src={img} alt={title} />
        <div className={styles.card_icon}>
          <FiArrowUpRight />
        </div>
      </div>
    </Link>
  );
};

export default Mycard;
