import React from "react";
import { Switch } from "react-router-dom";
import logo from "./logo.svg";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component.js";
import { Route } from "react-router-dom";
import Header from "./Components/header/header.component";
import "./App.css";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {" "}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
