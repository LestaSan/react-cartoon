import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Container, ListItem, PicBox, DescBox, Praise } from "../style";
import { Link } from 'react-router-dom';
// () => this.routerTo(item.get("DetailPageInfo"))



class ListContain extends Component {
  render() {
    const cartoonList = this.props.cartoonList.toJS();
    return (
      <Container>
        {cartoonList.map(item => {
          return (
            <Link to={{pathname: `/detail/`, state: {data: item.DetailPageInfo}}} key={item.id}>
              <ListItem>
                <PicBox>
                  <div className="pic-container">
                    <p className="high-light" />
                    <img className="item-pic" src={item.imgUrl} alt="" />
                  </div>
                  <p className="cartoon-title">{item.title}</p>
                </PicBox>
                <DescBox>
                  <div className="author">{item.author}</div>
                  <Praise>
                    <div className="number">
                      <i className="iconfont">&#xe668;</i>
                      {item.parise}
                    </div>
                  </Praise>
                </DescBox>
              </ListItem>
            </Link>
          )
        })}
      </Container>
    );
  }
  componentDidMount() {
    this.props.getCartoonList();
  }
  routerTo(data) {
    return {pathname: `/Detail/`, state: {data: data}}
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
