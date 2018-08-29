import React, { PureComponent } from 'react';
import Header from './components/header';
import ItemList from './components/itemlist'

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.list = props.location.state.data;
  }
  render() {
    return (
      <div>
        <Header list={this.list}/>
        <ItemList/>
      </div>
    );
  }
}

export default Detail;