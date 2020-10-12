import React, { Component } from "react";
import Title from "../../components/title/title";
import Button from "../../components/button/button";
import Country from "./Country/country";
import axios from "axios";

class CountryManager extends Component {
  state = {
    countryList: [],
    loading: false,
    regionSelected: null,
    currentPage: 1,
  };

  showCountryOfSpecificRegion = (region) => {
    let param = "";
    if (region === "all") {
      param = "all";
    } else {
      param = `region/${region}`;
    }
    axios
      .get(`https://restcountries.eu/rest/v2/${param}`)
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
        this.setState({ countryList, loading: false, regionSelected: region, currentPage:1 });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.showCountryOfSpecificRegion("all");
  };
  render() {
    let pagination = [];
    let countryList = "";
    if (this.state.countryList) {
      let countryListLength = this.state.countryList.length / 10;
      if (this.state.countryList.length % 10 !== 0) countryListLength++;
      for (let i = 1; i <= countryListLength; i++) {
        pagination.push(
          <Button
            key={i}
            btnType="btn-info"
            isSelected={this.state.currentPage === i}
            clic={() => {
              return this.setState({ currentPage: i });
            }}
          >
            {i}
          </Button>
        );
      }
      let begin = (this.state.currentPage - 1) * 10;
      let end = this.state.currentPage * 10;
      let countryListPaginate = this.state.countryList.slice(begin, end);
      countryList = countryListPaginate.map((country, index) => {
        return (
          <div className="col-12 col-md-6" key={index}>
            <Country {...country} />
          </div>
        );
      });
    }
    return (
      <>
        <Title>Liste des pays du monde</Title>
        <Button
          btnType="btn-info"
          clic={() => this.showCountryOfSpecificRegion("all")}
          isSelected={this.state.regionSelected === "all"}
        >
          Tous
        </Button>
        <Button
          btnType="btn-info"
          clic={() => this.showCountryOfSpecificRegion("Africa")}
          isSelected={this.state.regionSelected === "Africa"}
        >
          Afrique
        </Button>
        <Button
          btnType="btn-info"
          clic={() => this.showCountryOfSpecificRegion("Americas")}
          isSelected={this.state.regionSelected === "Americas"}
        >
          Amérique
        </Button>
        <Button
          btnType="btn-info"
          clic={() => this.showCountryOfSpecificRegion("Asia")}
          isSelected={this.state.regionSelected === "Asia"}
        >
          Asie
        </Button>
        <Button
          btnType="btn-info"
          clic={() => this.showCountryOfSpecificRegion("Europe")}
          isSelected={this.state.regionSelected === "Europe"}
        >
          Europe
        </Button>
        <Button
          btnType="btn-info"
          clic={() => this.showCountryOfSpecificRegion("Oceania")}
          isSelected={this.state.regionSelected === "Oceania"}
        >
          Océanie
        </Button>
        <p>Nombre de pays: {this.state.countryList.length}</p>
        {this.state.loading ? (
          <p>Chargement en cours...</p>
        ) : (
          <div className="row no-gutters">{countryList}</div>
        )}
        <div>{pagination}</div>
      </>
    );
  }
}
export default CountryManager;
