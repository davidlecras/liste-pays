import React from "react";

const error = (props) => {
  return <div className="alert alert-danger">{props.children}</div>;
};

export default error;
