import React from "react";
import SliderComponent from "./common/sliderComponent";

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent
        defaultValue={2000}
        min={1000}
        max={10000}
        label="Hello EveryOne"
        amount={2300}
        unit="$"
        step={100}
        onChange={(e) => console.log(e.target.value)}
      />
      <SliderComponent defaultValue={40} />
      <SliderComponent defaultValue={60} />
      <SliderComponent defaultValue={80} />
    </div>
  );
};

export default SliderSelect;
