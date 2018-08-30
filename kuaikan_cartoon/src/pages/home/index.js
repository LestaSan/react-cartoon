import React, { PureComponent } from 'react';
import { HomeContainer } from './style';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Body from './components/Body';

class Home extends PureComponent {
  render() {
    return (
      <HomeContainer>
        <SearchBar/>
        <SearchResult/>
        <Body />
      </HomeContainer>
    )
  }
}

export default Home;