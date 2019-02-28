import React, { Component } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";

import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;
