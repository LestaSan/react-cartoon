import React, { Component } from 'react';
import {
  ListWrapper,
  ListTable,
  ListItem,
  ItemBox
} from '../style';

class ItemList extends Component {
  constructor(props) {
    super(props)
    this.list = props.list;
  }
  render() {
    return (
      <ListWrapper>
        <ListTable>
          {
            this.list.map(item => {
              return (
                <ListItem key={item.id}>
            <ItemBox className="one">
              <div className="img-box">
                <img src={item.imgUrl} alt=""/>
              </div>
            </ItemBox >
            <ItemBox className="two">
              <p>{item.title}</p>
            </ItemBox>
            <ItemBox className="three">
              <i className="iconfont">&#xe668;</i>
              {item.praise}
            </ItemBox>
            <ItemBox className="four">{item.date}</ItemBox>
          </ListItem>
              )
            })
          }
        </ListTable>
      </ListWrapper>
    );
  }
}

export default ItemList;