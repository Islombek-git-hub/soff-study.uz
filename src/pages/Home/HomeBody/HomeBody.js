import styles from "./HomeBody.module.css";
import img from "../home.png";
import Mybutton from "../../../UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { modalFun } from "../../../redux/Actions/actions";
const Homebody = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.Homebody}>
      <div className={`container ${styles.hb_container}`}>
        <div className={styles.Homebody_text}>
          <h1>Soff study - zamonaviy kasblar markazi.</h1>
          <p>Biz bilan kelajak kasblarining yetuk mutaxassisiga aylaning.</p>
          <Mybutton fun={() => dispatch(modalFun())}>Biz haqimizda</Mybutton>
        </div>
        <div className={styles.Homebody_img}>
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Homebody;
