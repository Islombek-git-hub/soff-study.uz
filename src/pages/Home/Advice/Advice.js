import React from "react";
import styles from "./Advice.module.css";
const Advice = () => {
  return (
    <div className={styles.advice}>
      <div className={`container ${styles.advice_container}`}>
        <div>
          <h2>O'zingizga mos yo'nalish tanlang</h2>
          <p>
            Hozirgi kunda talab yuqori va rivojlanib borayotgan kurslardan
            birini tanlang. Kurs davomida portfolio to'plash, rezyume hosil
            qilish va ish topishingizga esa biz yordam beramiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advice;
