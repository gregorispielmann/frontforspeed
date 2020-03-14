import React, { useState } from "react";

import { Background, Car } from "./styles";
import Sound from "react-sound";
import Countdown from "../Countdown";

import KeyboardEventHandler from "react-keyboard-event-handler";

import countdownsound from "../../assets/sounds/countdown.wav";
import music from "../../assets/sounds/aces_high.mp3";

export default function GamePlay() {
  const [stop, setStop] = useState(true);
  const [countdown, setCountdown] = useState(true);
  const [position, setPosition] = useState(2);

  function checkKey(key) {
    if (position === 2) {
      if (key === "left" || key === "a") setPosition(1);
      if (key === "right" || key === "d") setPosition(3);
    } else if (position === 1) {
      if (key === "right" || key === "d") setPosition(2);
      if (key === "s") setPosition(2);
    } else if (position === 3) {
      if (key === "left" || key === "a") setPosition(2);
      if (key === "s") setPosition(2);
    }
  }

  return (
    <>
      <Sound
        url={countdownsound}
        playStatus={countdown ? "PLAYING" : "STOPPED"}
        onFinishedPlaying={() => {
          setCountdown(false);
          setStop(false);
        }}
      ></Sound>
      <Sound url={music} playStatus={countdown ? "STOPPED" : "PLAYING"}></Sound>
      {stop ? <Countdown /> : null}
      <Background stop={stop} position={position}>
        <Car></Car>
      </Background>
      <KeyboardEventHandler
        handleKeys={["a", "s", "d", "left", "right"]}
        onKeyEvent={(key, e) => checkKey(key)}
      />
    </>
  );
}
