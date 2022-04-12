import React from "react";
import styles from "./HomeBody.module.css";
import img from "./Coding workshop-amico.webp";
import Myinput from "../../../UI/MyInput/MyInput";
const Homebody = () => {
  return (
    <div className={styles.Homebody}>
      <div className={`container ${styles.hb_container}`}>
        <div className={styles.Homebody_text}>
          <h1>Soff study - zamonaviy kasblar markazi.</h1>
          <p>Biz bilan kelajak kasblarining yetuk mutaxassisiga aylaning.</p>
          <Myinput type={"search"} placeholder={"Qidirish..."} />
        </div>
        <div className={styles.Homebody_img}>
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Homebody;
