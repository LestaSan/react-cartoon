import React, { Component } from "react";
import {
  NavSearch,
  Search,
  SearchButton
} from '../style';

class SearchBar extends Component {
  render() {
    return (
      <NavSearch>
        <div className="search">
          <p className="search-icon"/>
          <Search />
          <SearchButton/>
        </div>
        <p className="s-img" />
      </NavSearch>
    );
  }
}

export default SearchBar;
