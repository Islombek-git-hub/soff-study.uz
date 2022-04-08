import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <header className={styles.header}>
        <Container maxWidth="lg">
          <h6 className={styles.logo}>Soff Study</h6>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Header;
