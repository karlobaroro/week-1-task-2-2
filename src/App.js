import React, { Component } from 'react';
import data from './data.js';
import DisplayRecipe from './DisplayRecipe';

class App extends Component {
  render() {
    return (
      <div>
        <DisplayRecipe recipes={data.recipe} />
      </div>
    );
  }
}

export default App;