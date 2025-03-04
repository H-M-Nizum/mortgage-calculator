import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({
  defaultValue,
  min,
  max,
  amount,
  label,
  unit,
  step,
  value,
  onChange,
}) => {
  return (
    <Stack my={3}>
      <Stack>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant="subtitle2">
          {unit}
          {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        value={value}
        onChange
        marks
        step={step}
      />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography color="text.secondary" variant="caption">
          {unit}
          {min}
        </Typography>
        <Typography color="text.secondary" variant="caption">
          {unit}
          {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
