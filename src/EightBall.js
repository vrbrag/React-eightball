import React, { useState } from "react";
import answers from "./answersList";
import "./EightBall.css";

const EightBall = () => {
   const [msg, setMsg] = useState("Think of a Question");
   const [color, setColor] = useState("black");


   const newBall = () => {
      let randIdx = Math.floor(Math.random() * answers.length);
      let newAnswer = answers[randIdx];
      setColor(newAnswer.color);
      setMsg(newAnswer.msg);
   }
   return (
      <div>
         <p id="EightBall-text" className={color} onClick={newBall}>{msg}</p>
      </div>
   )
};

export default EightBall;