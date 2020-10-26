import React from "react";
import CountryManager from "./containers/CountryManager/countryManager";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import DisplayCountry from "./containers/CountryManager/DisplayContry/displayCountry";
import Error from "./components/error/error";
import Error404 from "./components/error/error404";
import "./app.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <h1>Page d'accueil</h1>} />
        <Route path="/pays" exact component={CountryManager} />
        <Route
          path="/pays/:id"
          render={(props) => (
            <DisplayCountry countryName={props.match.params.id} {...props} />
          )}
        />
        <Route
          render={() => (
            <Error>
              <Error404 />
            </Error>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
