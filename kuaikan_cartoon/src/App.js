import React, { Component } from "react";
import Header from "./common/header/index";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
