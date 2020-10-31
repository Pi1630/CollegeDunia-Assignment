import React, { Component } from 'react';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>
              React Hooks Infinite Scroller
            </h1>
            <h3 className="text-muted">
              An <u>infinite scroll</u> component, built using React and React Hooks.
              <br />
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6 justify-content-center my-5">
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
