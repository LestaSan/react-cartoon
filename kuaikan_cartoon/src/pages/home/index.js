import React, { Component } from 'react';
import { HomeContainer } from './style';
import SearchBar from './components/SearchBar';
import Body from './components/Body';
import Footer from './components/Footer';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <SearchBar/>
        <Body />
        <Footer />
      </HomeContainer>
    )
  }
}

export default Home;