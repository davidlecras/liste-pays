import React from "react";
import { NavLink } from "react-router-dom";

const country = (props) => {
  let content = "";
  if (!props.isCountryDetailsDisplayed) {
    content = (
      <NavLink to={props.match.url + "/" + props.name} className="nav-link">
        Voir la fiche détaillée
      </NavLink>
    );
  } else {
    content = (
    <div>Monaie: {props.currency}</div>,
    <div> Population: {props.population}</div>
    )
  }
  return (
    <div className="row no-gutters border m-2">
      <div className="col-4">
        <img src={props.flag} alt={props.name} width="100%" className="p-2" />
      </div>
      <div className="col">
        <h4>Nom: {props.frenchName}</h4>
        <div>Capitale: {props.capital}</div>
        <div>Région: {props.continent}</div>
        {content}
      </div>
    </div>
  );
};

export default country;
