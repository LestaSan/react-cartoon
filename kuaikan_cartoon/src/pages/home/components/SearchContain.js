import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, ListItem, PicBox, DescBox, Praise } from "../style";

class SearchContain extends Component {
  render() {
    const resultList = this.props.resultList.toJS();
    return (
      <Container>
        {resultList.map(item => {
          return (
              <ListItem key={item.id} className="search-box">
                <PicBox>
                  <div className="search-container">
                    <p className="high-light" />
                    <img className="search-item-pic" src={item.imgUrl} alt="" />
                  </div>
                  <p className="cartoon-title">{item.title}</p>
                </PicBox>
                <DescBox>
                  <div className="author">{item.author}</div>
                  <Praise>
                    <div className="number">
                      <i className="iconfont">&#xe668;</i>
                      {item.praise}
                    </div>
                  </Praise>
                </DescBox>
              </ListItem>
          )
        })}
      </Container>
    );
  }
}

const mapState = state => ({
  resultList: state.getIn(['home', 'resultList'])
});

export default connect(mapState)(SearchContain);
