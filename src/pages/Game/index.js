import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Window, WindowContent, WindowHeader } from "react95";
import { Container } from "./styles";
import GamePlay from "../../components/GamePlay";

export default function Game({ location }) {
  const { name } = location.state;
  const history = useHistory();

  return (
    <Container>
      <Window style={{ maxWidth: "920px", width: "100%", height: "100%" }}>
        <WindowHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div>
            <img
              src={require("../../assets/images/icon.png")}
              style={{ width: "50px" }}
              alt="icon"
            ></img>
            <span style={{ paddingLeft: "10px" }}>Front for Speed</span>
          </div>
          <Button size="sm" onClick={() => history.push("/main")}>
            X
          </Button>
        </WindowHeader>
        <WindowContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
            alignItems: "stretch",
            height: "100%"
          }}
        >
          <GamePlay></GamePlay>
        </WindowContent>
      </Window>
    </Container>
  );
}
