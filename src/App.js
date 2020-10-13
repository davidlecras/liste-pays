import React from "react";
import CountryManager from "./containers/CountryManager/countryManager";
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/navBar/navBar"

function App() {
  return (
    <Router>
    <NavBar/>
      <Route path="/" exact render={()=><h1>Page d'accueil</h1>} />
      <Route path="/pays" exact component={CountryManager} />
    </Router>
  );
}

export default App;
