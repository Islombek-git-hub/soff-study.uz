import React from "react";
import styles from "./SignUp.module.css";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import img from "./SignUp.png";
const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={`container ${styles.sig_up_container}`}>
        <form
          className={styles.sign_up_form}
          onSubmit={(e) => e.preventDefault()}
        >
          <h4>Soff Study</h4>
          <MyInput type="text" placeholder="Ism..." />
          <MyInput type="text" placeholder="Familiya..." />
          <MyInput type="text" placeholder="Tel..." />
          <MyInput type="password" placeholder="Parol..." />
          <MyInput type="password" placeholder="Parolni tasdiqlash..." />
          <MyButton>RO'YXATDAN O'TISH</MyButton>
        </form>
        <div className={styles.img_sign_up}>
          <img src={img} alt="sign_up" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
