import React from "react";
import Mycard from "../../../UI/MyCard/MyCard";
import styles from "./FormOfEducation.module.css";
import img1 from "./Webinar-pana.webp";
import img2 from "./Coding workshop-pana.webp";
const Formofeducation = () => {
  return (
    <div className={styles.formEducation}>
      <div className={`container ${styles.formEducation_container}`}>
        <h2>Ta'lim shakli</h2>
        <Mycard img={img1} title="online" url="" />
        <Mycard img={img2} title="offline" url="" />
      </div>
    </div>
  );
};

export default Formofeducation;
