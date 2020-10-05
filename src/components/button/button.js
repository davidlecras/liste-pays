import React from "react";

const button = (props) => {
  const btnCss = `btn ${props.btnType} ${props.css}`;
  return (
    <button className={btnCss} 
    onClick={props.clic}
    style={props.isSelected ? {opacity:1}: {opacity: 0.5}}
    >
      {props.children}
    </button>
  );
};

export default button;