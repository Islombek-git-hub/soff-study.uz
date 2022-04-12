import Mycard from "../../../UI/MyCard/MyCard";
import styles from "./Courses.module.css";
import img from "../Union.png";
const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className={`container ${styles.courses_container}`}>
        <h2>Bizning kurslarimiz</h2>
        <Mycard img={img} title="Front-End" url="" />
        <Mycard img={img} title="Back-end" url="" />
        <Mycard img={img} title="PHP" url="" />
        <Mycard img={img} title="Kompyuter savodhonligi" url="" />
      </div>
    </div>
  );
};

export default Courses;
