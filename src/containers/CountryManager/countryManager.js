import React, { Component } from "react";
import Title from "../../components/title/title";
import Button from "../../components/button/button";
import Country from "./Country/country";
import axios from "axios";

class CountryManager extends Component {
  state = {
    countryList: [],
    loading: false,
  };

  loadCountryList = () => {
    this.setState({ loading: true });
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        const countryList = response.data.map((country) => {
          return {
            name: country.name,
            frenchName: country.translations.fr,
            capital: country.capital,
            continent: country.region,
            flag: country.flag,
          };
        });
        this.setState({ countryList, loading: false });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.loadCountryList();
  };
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
        {this.state.loading ? (
          <p>Chargement en cours...</p>
        ) : (
          <div className="row no-gutters">
            {this.state.countryList.map((country, index) => {
              return (
                <div className="col-12 col-md-6" key={index}>
                  <Country {...country} />
                </div>
              );
            })}
          </div>
        )}
        <div>pagination</div>
      </>
    );
  }
}
export default CountryManager;
