import React, { Component } from 'react';
import { HomeContainer } from './style';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Body from './components/Body';
import Footer from './components/Footer';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <SearchBar/>
        <SearchResult/>
        <Body />
        <Footer />
      </HomeContainer>
    )
  }
}

export default Home;