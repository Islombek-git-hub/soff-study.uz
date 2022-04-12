import styles from "./MyInput.module.css";
const Myinput = ({ type, placeholder }) => {
  return (
    <input className={styles.my_input} type={type} placeholder={placeholder} />
  );
};

export default Myinput;
