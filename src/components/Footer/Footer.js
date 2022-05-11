import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        {/* <img src="" alt="" /> */}
        <h1>This is footer</h1>
      </div>
    </div>
  );
};

export default Footer;
