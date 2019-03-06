import React, { Component } from "react";
import "./App.scss";
//import Hero from "./components/Hero/Hero";
import Typography from '@material-ui/core/Typography';

import Header from "./components/Header/Header";
import {Colors} from './constants/Variables';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Typography component="h2" variant="h1" gutterBottom color="primary">
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
        {/* <Hero /> */}
      </div>
    );
  }
}

export default App;
