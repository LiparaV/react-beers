import React from "react";
import "./modal.css";

const Modal = ({ active, setActive, currentBeer }) => {

  console.log(currentBeer);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "content active" : "content"}
        onClick={(e) => e.stopPropagation()}
      ></div>

    </div>
  );
};

export default Modal;
