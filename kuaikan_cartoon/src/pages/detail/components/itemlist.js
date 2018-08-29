import React, { Component } from 'react';
import {
  ListWrapper,
  ListTable,
  ListItem,
  ItemBox
} from '../style';

class ItemList extends Component {
  render() {
    return (
      <ListWrapper>
        <ListTable>
          <ListItem>
            <ItemBox className="one">
              <img src="https://i1s.kkmh.com/image/180826/I6CqlwWyJ.webp-w750.jpg" alt=""/>
            </ItemBox >
            <ItemBox className="two">
              <p>第37话 生气的金毛太子</p>
            </ItemBox>
            <ItemBox className="three">
              <i className="iconfont">&#xe668;</i>
              43万
            </ItemBox>
            <ItemBox className="four">08-27</ItemBox>
          </ListItem>
        </ListTable>
      </ListWrapper>
    );
  }
}

export default ItemList;