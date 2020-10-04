import React, { Component } from 'react';
import Title from "../../components/title/title";
import Button from "../../components/button/button"

class CountryManager extends Component{
  render() {
    return(
      <>
      <Title>Liste des pays du monde</Title>
      <Button btnType="btn-info">Tous</Button>
      <Button btnType="btn-info">Afrique</Button>
      <Button btnType="btn-info">Amérique</Button>
      <Button btnType="btn-info">Asie</Button>
      <Button btnType="btn-info">Europe</Button>
      <Button btnType="btn-info">Océanie</Button>
      <div>pays</div>
      <div>pagination</div>
      </>
    )
  }
}
export default CountryManager;