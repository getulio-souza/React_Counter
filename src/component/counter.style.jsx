import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #183f18;
  width: fit-content;
  text-align: center;
  padding: 5rem;
  box-shadow: 1px 5px 8px #000;
  /* clip-path: circle(50%); */
  margin: 2rem auto;
`;

export const CounterTitle = styled.h1`
  font-size: 2rem;
  font-family: inter;
  color: #fff;
`;

export const CounterContainerBtn = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DecreaseBtn = styled.button`
  border-style: none;
  padding: 10px 20px;
  border-radius: 20px;
  color: #000;
  font-weight:700;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 1px 2px 5px #000;
  &:hover {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`;

export const ResetBtn = styled.button`
  border-style: none;
  padding: 10px 20px;
  border-radius: 20px;
  color: #000;
  font-weight:700;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 1px 2px 5px #000;
  &:hover {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`;

export const IncreaseBtn = styled.button`
  border-style: none;
  padding: 10px 20px;
  border-radius: 20px;
  color: #000;
  font-weight:700;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 1px 2px 5px #000;
  &:hover {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`;
