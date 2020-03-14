import styled from "styled-components";

export const Start = styled.div``;

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  background-image: url(${props =>
    props.stop
      ? require("../../assets/images/background_stop.jpg")
      : require("../../assets/images/background_game.gif")});
  background-position: center;
  background-size: cover;
  background-color: black;

  display: flex;
  align-items: flex-end;
  justify-content: ${props => {
    switch (props.position) {
      case 1:
        return "flex-start";
      case 2:
        return "center";
      case 3:
        return "flex-end";
    }
  }};
`;

export const Car = styled.div`
  width: 30vh;
  height: 30vh;
  background-image: url(${require("../../assets/images/car.png")});
  background-position: center;
  background-size: cover;
`;
