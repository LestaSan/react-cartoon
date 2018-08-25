import React, { Component } from 'react';
import { HomeContainer } from './style';
import SearchBar from './components/SearchBar';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <SearchBar/>
      </HomeContainer>
    )
  }
}

export default Home;