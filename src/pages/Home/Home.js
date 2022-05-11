import Homebody from "./HomeBody/HomeBody";
import styles from "./Home.module.css";

import Advice from "./Advice/Advice";
import Courses from "./Courses/Courses";
import Privileges from "./Privileges/Privileges";
import Ourteam from "./OurTeam/OurTeam";
import Ourpartners from "./OurPartners/OurPartners";
import Modal from "../../components/Modal/Modal";
const Home = () => {
  return (
    <div className={styles.home}>
      <Modal>
        <video width="100%" controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/test-2d0ee.appspot.com/o/pexels-nothing-ahead-10505868%20(1).mp4?alt=media&token=0150478b-50d2-4e92-8fb5-ef9c3c3f2afd"
            type="video/mp4"
          />
        </video>
      </Modal>

      <Homebody />
      <Advice />
      <Courses />
      <Privileges />
      <Ourteam />
      <Ourpartners />
    </div>
  );
};
export default Home;
