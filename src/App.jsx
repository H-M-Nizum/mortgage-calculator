import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Grid2 } from "@mui/material";
import Result from "./components/result";
import SliderSelect from "./components/sliderSelect";
import Tenure from "./components/tenure";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Grid2 container spacing={2}>
        <Grid2 item>
          <SliderSelect />
          <Tenure />
        </Grid2>
        <Grid2 item>
          <Result />
        </Grid2>
      </Grid2>
    </>
  );
}

export default App;
