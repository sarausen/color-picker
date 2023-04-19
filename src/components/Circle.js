import React from "react";

function Circle({ color, active, handleClick, num}) {
  return (
    <button
      className={`circle ${active ? "active" : ""}`}
      style={{ backgroundColor: color }}
      onClick={() => handleClick(color)}

    >
     {num}
    </button>
  );
}

export default Circle;
