import React, { PureComponent } from 'react';
import Header from './components/header';
import ItemList from './components/itemlist';
import { DetailContainer } from './style';

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.list = props.location.state.data;
  }
  render() {
    return (
      <DetailContainer>
        <Header list={this.list}/>
        <ItemList/>
      </DetailContainer>
    );
  }
}

export default Detail;