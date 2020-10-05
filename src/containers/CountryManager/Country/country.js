import React from "react";

const pays = (props) => {
  return (
    <div className="row no-gutters border m-2">
      <div className="col-4">
        <img src={props.flag} alt={props.name} width="100%" className="p-2" />
      </div>
      <div className="col">
        <h4>Nom: {props.frenchName}</h4>
        <p>Capitale: {props.capital}</p>
        <p>Région: {props.continent}</p>
      </div>
    </div>
  );
};

export default pays;
