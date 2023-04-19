import React, { useState } from "react";
import "./App.css";
import Circle from "./components/Circle.js";
import Wrapper from "./components/Wrapper";

function App() {
  const [activeCircle, setActiveCircle] = useState("");

  const handleClick = (color) => {
    setActiveCircle(color);
    document.body.style.backgroundColor = color;
  };
  const colors = [
    {
      "id" : 1,
      "color" : "rgb(241, 117, 119)"
    },
    {
      "id" : 2,
      "color" : "rgb(236, 206, 151"
    },
    {
      "id" : 3,
      "color" : "rgb(116, 224, 121)"
    },
    {
      "id" : 4,
      "color" : "#5cf"
    },
    {
      "id" : 5,
      "color" : "rgb(189, 125, 231)"
    },
  ]

  return (
    <div className="bg">
      <Wrapper>
      {colors.map((num) => {
          return (
            <Circle key={num} 
            color={num.color}
            handleClick={handleClick}
            num={num.id}
            />
          );
        })}
      </Wrapper>
    </div>
  );
}



export default App;
