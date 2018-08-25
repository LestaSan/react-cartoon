import React, { Component } from 'react';
import {
  Container,
  ListItem
} from '../style';


class ListContain extends Component {
  render() {
    return (
      <Container>
        <ListItem>
          <div className="pic-box">
            <img className="item-pic" src="https://i1s.kkmh.com/image/180703/SiVs37kAE.webp-w750.jpg" alt=""/>
          </div>
          <p className="tag">甜美的咬痕</p>
        </ListItem>
      </Container>
    );
  }
}

export default ListContain;