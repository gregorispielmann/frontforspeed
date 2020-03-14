import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  AppBar,
  Button,
  Cutout,
  Toolbar,
  Anchor,
  List,
  ListItem
} from "react95";
import { FaWindows } from "react-icons/fa";
import { Title, Container } from "./styles";
import StartModal from "../../components/StartModal";
import Menu from "../../components/Menu";

export default function Main() {
  const [newStart, setNewStart] = useState(false);
  const [name, setName] = useState("");
  const [isStarting, setIsStarting] = useState(false);
  const history = useHistory();

  const handleStart = () => setNewStart(!newStart);

  const handleOk = () => {
    history.push({
      pathname: "/game",
      state: {
        name: name
      }
    });
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5em"
      }}
    >
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Menu></Menu>
          <Cutout style={{ padding: "6px" }}>
            {new Date().toDateString()}
          </Cutout>
        </Toolbar>
      </AppBar>

      <Anchor
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={handleStart}
      >
        <img
          src={require("../../assets/images/logo.png")}
          style={{ width: "100px" }}
          alt="logo"
        ></img>
        <span>Front for Speed</span>
      </Anchor>

      {newStart ? (
        <StartModal
          handleStart={handleStart}
          handleOk={handleOk}
          setName={setName}
        ></StartModal>
      ) : null}
    </Container>
  );
}
