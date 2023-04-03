import styled from "styled-components";

export const CustomCursorContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  transition: all 200ms ease-out;
  position: fixed;
  pointer-events: none;
  background-color: #088f8f;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
  z-index: 9998;
  opacity: 0.3;
`;

export const CustomCursorTracker = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #dbdbdb;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 0.3s, height 0.3s;
  z-index: 9999;
`;
