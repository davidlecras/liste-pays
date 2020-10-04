import React from "react";

const button = (props) => {
  const btnCss = `btn ${props.btnType} ${props.css}`;
  return (
    <div className="container">
    <button className={btnCss} onClick={props.clic}>
      {props.children}
    </button>
    </div>
  );
};

export default button;