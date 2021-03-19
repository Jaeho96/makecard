import React from "react";
import { HashRouter, Route } from "react-router-dom";
import css from "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./routes/Home";
import Mystage from "./routes/Mystage";
import Signin from "./routes/Signin";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/my stage" component={Mystage} />
        <Route path="/signin" component={Signin} />
      </HashRouter>
    </>
  );
}

export default App;
