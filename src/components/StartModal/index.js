import React from "react";

// import { Container } from './styles';
import { Button } from "react95";
import { TextField, Window, WindowHeader, WindowContent } from "react95";

export default function StartModal({ handleOk, setName, handleStart }) {
  return (
    <Window style={{ width: "400px" }}>
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
        <Button size={"sm"} onClick={handleStart}>
          X
        </Button>
      </WindowHeader>
      <WindowContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          height: "100%"
        }}
      >
        <p>Vamos iniciar o jogo?</p>
        <TextField
          placeholder="Digite seu nome"
          style={{ margin: "10px 0" }}
          onChange={e => setName(e.target.value)}
        ></TextField>
        <Button onClick={handleOk}>Ok</Button>
      </WindowContent>
    </Window>
  );
}
