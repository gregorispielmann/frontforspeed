import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import { Container, Button, Windows } from "./styles";
import soundfile from "../../assets/sounds/startupsound.wav";

import history from "../../services/history";
import { FaPowerOff } from "react-icons/fa";

export default function Opening() {
  const [play, setPlay] = useState(false);
  const handleFinish = () => {
    history.push("/main");
  };

  const start = () => setPlay(true);

  return (
    <>
      <Container isPlaying={play}>
        <Button onClick={start}>
          <FaPowerOff size="10em"></FaPowerOff>
        </Button>
      </Container>
      <Windows isPlaying={play} />
      <Sound
        url={soundfile}
        autoLoad
        onLoading={() => setPlay(false)}
        playStatus={play ? "PLAYING" : "STOPPED"}
        onFinishedPlaying={handleFinish}
      />
    </>
  );
}
