import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import styles from "./Head.module.css";

const Head = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Grid container spacing={2} className={styles.head}>
          <Grid item md={6} xs={12} className={styles.head_text}>
            <h2>Soff study - zamonaviy kasblar markazi.</h2>
            <p>Biz bilan kelajak kasblarining yetuk mutaxassisiga aylaning.</p>
          </Grid>
          <Grid item md={6} xs={12} className={styles.head_img}>
            <img src="./img/home_img.webp" alt="home_img" />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Head;
