import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";

export default class App extends Component {
  render() {
    return <Palette {...seedColors[3]} />;
  }
}
