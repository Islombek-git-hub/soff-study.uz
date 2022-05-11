import styles from "./SignIn.module.css";
import React from "react";
import Myinput from "../../UI/MyInput/MyInput";
import Mybutton from "../../UI/MyButton/MyButton";
import img from "./signIn.png";
const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <div className={`container ${styles.sign_in_container}`}>
        <form
          className={styles.form_sign_in}
          onSubmit={(e) => e.preventDefault()}
        >
          <h4>Soff Study</h4>
          <Myinput type="text" placeholder="Tel..." />
          <Myinput type="password" placeholder="Parol..." />
          <Mybutton className={styles.btn_form}>KIRISH</Mybutton>
        </form>
        <div className={styles.img_sign_in}>
          <img src={img} alt="sign_in" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
