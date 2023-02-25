import "./styles.css";
import Kulka from "./Kulka";
import React, { useState } from "react";

export default function App() {
  const [lewe, setLewe] = useState(0);
  const [gora, setGora] = useState(0);
  const [lewe1, setLewe1] = useState(100);
  const [gora1, setGora1] = useState(0);
  React.useEffect(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          setGora(gora - 5);
          break;

        case "ArrowDown":
          setGora(gora + 5);
          break;

        case "ArrowLeft":
          setLewe(lewe - 5);
          break;

        case "ArrowRight":
          setLewe(lewe + 5);
          break;

        case "w":
          setGora1(gora1 - 5);
          break;

        case "s":
          setGora1(gora1 + 5);
          break;

        case "a":
          setLewe1(lewe1 - 5);
          break;

        case "d":
          setLewe1(lewe1 + 5);
          break;

        default:
          console.log("żadna ze strzałek nie była naciśnięta");
      }
    });
  });

  // if x>x1>x+szerokosc & y>y1>y+wysokosc{
  // alert(game over)
  return (
    <>
      <div
        tabIndex="0"
        style={{ top: gora, left: lewe }}
        className="proba"
      ></div>
      <div
        tabIndex="0"
        style={{ top: gora1, left: lewe1 }}
        className="proba1"
      ></div>
    </>
  );
}
