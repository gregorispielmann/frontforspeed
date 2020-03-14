import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import { Windows } from "./styles";
import soundfile from "../../assets/sounds/startupsound.wav";

import history from "../../services/history";

export default function Opening() {
  const [play, setPlay] = useState(false);
  const handleFinish = () => {
    history.push("/main");
  };

  const start = () => setPlay(true);

  useEffect(() => {
    start();
  }, []);

  return (
    <>
      <Windows />
      <Sound
        url={soundfile}
        autoLoad
        onLoading={() => setPlay(false)}
        onLoad={() => setPlay(true)}
        // playStatus={play ? "PLAYING" : "STOPPED"}
        playStatus={"PLAYING"}
        onFinishedPlaying={handleFinish}
      />
    </>
  );
}
