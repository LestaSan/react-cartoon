import React, { Component } from "react";
import Header from "./common/header/index";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/detail/:id?" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
