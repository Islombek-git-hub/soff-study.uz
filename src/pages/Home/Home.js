import Header from "../../components/Header/Header";
import Homebody from "./HomeBody/HomeBody";
// import styles from "./Home.module.css";
import Formofeducation from "./FormOfEducation/FormOfEducation";
import Advice from "./Advice/Advice";
import Courses from "./Courses/Courses";
import Privileges from "./Privileges/Privileges";
const Home = () => {
  return (
    <>
      <Header />
      <Homebody />
      <Formofeducation />
      <Advice />
      <Courses />
      <Privileges />
    </>
  );
};
export default Home;
