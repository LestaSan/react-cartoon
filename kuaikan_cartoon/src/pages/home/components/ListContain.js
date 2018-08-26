import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Container, ListItem, PicBox, DescBox, Praise } from "../style";

class ListContain extends Component {
  render() {
    const { cartoonList } = this.props;
    return (
      <Container>
        {cartoonList.map(item => {
          return (
            <ListItem key={item.get("id")}>
              <PicBox>
                <div className="pic-container">
                  <img className="item-pic" src={item.get("imgUrl")} alt="" />
                </div>
                <p className="cartoon-title">{item.get("title")}</p>
              </PicBox>
              <DescBox>
                <div className="author">{item.get("author")}</div>
                <Praise>
                  <div className="number">
                    <i className="iconfont">&#xe668;</i>
                    {item.get("praise")}
                  </div>
                </Praise>
              </DescBox>
            </ListItem>
          );
        })}
      </Container>
    );
  }
  componentDidMount() {
    this.props.getCartoonList();
  }
}

const mapState = state => ({
  cartoonList: state.getIn(["home", "cartoonList"])
});

const mapDispatch = dispatch => ({
  getCartoonList() {
    const action = actionCreators.getCartoonList();
    dispatch(action);
  }
});

export default connect(
  mapState,
  mapDispatch
)(ListContain);
