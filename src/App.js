// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./configureStore";

import Counter from "./Counter";

import type { Store } from "./types";

// This does not work
import foo from "./services/foo";
// While this does
// import foo from "./services/foo/foo.service";

const store: Store = configureStore();

class App extends Component {
  constructor(props: Object) {
    super(props);

    console.log(foo("alpha", "bravo"));
  }

  render() {
    return (
      <Provider store={store}>
        <Counter text="some text" />
      </Provider>
    );
  }
}

export default App;
