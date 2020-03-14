import React, { useState, useEffect } from "react";

import { Container } from "./styles";

export default function Countdown() {
  const [number, setNumber] = useState(3);

  useEffect(() => {
    function start() {
      setInterval(() => {
        if (number > 0) {
          setNumber(number - 1);
        }
      }, 800);
    }
    start();
  }, [number]);

  return <Container>{number === 0 ? "Go!" : number}</Container>;
}
