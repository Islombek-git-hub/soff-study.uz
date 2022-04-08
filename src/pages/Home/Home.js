import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import Directions from "./Directions/Directions";
import Formofeducation from "./formOfEducation/formOfEducation";
import Head from "./Head/Head";
import Header from "./Header/Header";
import Privileges from "./Privileges/Privileges";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Head />
        <Formofeducation />
        <Directions />
        <Privileges />
      </Container>
    </React.Fragment>
  );
};

export default Home;
