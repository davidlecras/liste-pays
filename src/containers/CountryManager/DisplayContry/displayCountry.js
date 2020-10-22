import React, { Component } from "react";
import axios from "axios";
import Title from "../../../components/title/title";
import Country from "../Country/country";

class DisplayCountry extends Component {
  state = {
    data: null,
    loading: false,
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    return axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.props.countryName}?fullText=true`
      )
      .then((response) => {
        console.log(response.data)
        this.setState({
          data: response.data[0],
          loading: false,
        });
      })
      .catch((erros) => console.log(erros));
  };
  render() {
    return (
      <div className="container">
        <Title>Un pays: {this.props.countryName}</Title>
        {this.state.data && (
          <Country
            flag={this.state.data.flag}
            name={this.state.data.name}
            capital={this.state.data.capital}
            frenchName={this.state.data.translations.fr}
            continent={this.state.data.region}
            {...this.props}
            isCountryDetailsDisplayed={true}
            currency={this.state.data.currencies[0].name}
            population={this.state.data.population}
          />
        )}
      </div>
    );
  }
}
export default DisplayCountry;
