import React, { PureComponent } from 'react';
import Header from './components/Header';

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.list = props.location.state.data;
  }
  render() {
    return (
      <Header list={this.list}/>
    );
  }
}

export default Detail;