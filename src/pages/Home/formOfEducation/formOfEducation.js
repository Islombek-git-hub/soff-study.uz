import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import styles from "./formOfEducation.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Formofeducation = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Ta'lim shakli
          </h2>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Item className={styles.edu_type}>
                <h4>Online</h4>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Item className={styles.edu_type}>
                <h4>Offline</h4>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Formofeducation;
