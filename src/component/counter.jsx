import React, { useState } from "react";
import {
  CounterContainer,
  CounterTitle,
  CounterContainerBtn,
  DecreaseBtn,
  ResetBtn,
  IncreaseBtn,
} from "./counter.style";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <CounterContainer>
        <CounterTitle>regular counter</CounterTitle>
        <CounterTitle>{value}</CounterTitle>
        <CounterContainerBtn>
          <DecreaseBtn onClick={() => setValue(value - 1)}>-</DecreaseBtn>
          <ResetBtn onClick={reset}>Reset</ResetBtn>
          <IncreaseBtn onClick={() => setValue(value + 1)}>+</IncreaseBtn>
        </CounterContainerBtn>
      </CounterContainer>

      <CounterContainer>
        <CounterTitle>Complex counter</CounterTitle>
        <CounterTitle>{value}</CounterTitle>
        <IncreaseBtn onClick={complexIncrease}>
          increase later
        </IncreaseBtn>
      </CounterContainer>
    </>
  );
};

export default UseStateCounter;
