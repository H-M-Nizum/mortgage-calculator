import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Container, Grid, Grid2 } from "@mui/material";
import Result from "./components/result";
import SliderSelect from "./components/sliderSelect";
import Tenure from "./components/tenure";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect />
            <Tenure />
          </Grid>
          <Grid item md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
