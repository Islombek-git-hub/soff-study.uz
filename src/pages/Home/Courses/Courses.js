import Mycard from "../../../UI/MyCard/MyCard";
import styles from "./Courses.module.css";
import front_end from "./front-end.png";
import back_end from "./back-end.png";
import smm from "./smm.png";
import computer from "./computer.png";

const courses = [
  {
    name: "Front-End",
    img_url: front_end,
    url: "",
  },
  {
    name: "Back-End",
    img_url: back_end,
    url: "",
  },
  {
    name: "SMM",
    img_url: smm,
    url: "",
  },
  {
    name: "Kompyuter savodhonligi",
    img_url: computer,
    url: "",
  },
];
const Courses = () => {
  return (
    <div className={styles.courses}>
      <h2 className="title">Bizning kurslarimiz</h2>
      <div className={`container ${styles.courses_container}`}>
        {courses.map((a, i) => (
          <div key={i + 10}>
            <Mycard img={a.img_url} title={a.name} url={a.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
