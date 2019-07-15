import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>paletter goes here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}
export default App;

//  {/* <div>
//       {" "}
//       <Palette palette={generatePalette(seedColors[1])} />;
//     </div> */}
