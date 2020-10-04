import React, { Component } from "react";
import Title from "../../components/title/title";
import Button from "../../components/button/button";
import axios from "axios";

class CountryManager extends Component {
  state = {
    countryList: [],
  };

  loadCountryList= ()=>{
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response)=>{
      const countryList= Object.values(response.data);
      this.setState({countryList:countryList})
    })
    .catch((error)=>console.log(error))
  }

  componentDidMount=()=>{
    this.loadCountryList()
  }
  render() {
    return (
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
    );
  }
}
export default CountryManager;
