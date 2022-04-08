import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import styles from "./Directions.module.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Directions = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={styles.directions}>
        <Box>
          <Box className={styles.directions_head}>
            <h2>O'zingizga mos yo'nalish tanlang</h2>
            <p>
              Dasturlash sohasida eng rivojlangan va o'zingizni kuchli
              tomoningizni ko'rsata oladigan yo'nalishni tanlang. Kurs davomida
              portfolio to'plash, rezyume hosil qilish va ish topishingizga esa
              amaliy maslahatlar beramiz.
            </p>
          </Box>
          <Grid container spacing={4} className={styles.courses}>
            <Grid item sm={6} xs={12}>
              <Item className={styles.edu_type2}>
                <h4>Front-End</h4>
              </Item>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Item className={styles.edu_type2}>
                <h4>Back-End</h4>
              </Item>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Item className={styles.edu_type2}>
                <h4>PHP</h4>
              </Item>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Item className={styles.edu_type2}>
                <h4>Kompyuter savodhonligi</h4>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Directions;
