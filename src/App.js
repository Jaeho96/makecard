import React from "react";
import { HashRouter, Route } from "react-router-dom";
import css from "./App.css";
import Navigation from "./Components/Navigation";
import first from "./routes/first";
import Home from "./routes/Home";
import second from "./routes/second";
import Signin from "./routes/Signin";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/1" component={first} />
      <Route path="/2" component={second} />
      <Route path="/signin" component={Signin} />
    </HashRouter>
  );
}

export default App;
