import styled from "styled-components";

export const Container = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: black;

  display: ${props => (props.isPlaying ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: green;
  border: none;
  background: none;
  transition: 100ms ease-in-out;

  :hover {
    color: lightgreen;
  }
`;

export const Windows = styled.div`
  display: ${props => (props.isPlaying ? "flex" : "none")};
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-image: url("https://media2.giphy.com/media/edl5t7nDVPtC/giphy.gif");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: black;
`;
