import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  NavSearch,
  Search,
  SearchButton
} from '../style';

class SearchBar extends Component {
  render() {
    return (
      <NavSearch>
        <div className="search">
          <p className="search-icon"/>
          <Search innerRef={(icon) => {this.input = icon}}/>
          <SearchButton onClick={this.test.bind(this)}/>
        </div>
        <p className="s-img" />
      </NavSearch>
    );
  }
  componentDidMount() {
    this.props.getSearchInfo()
  }
  test() {
    // const { cartoonList } = this.props;
    const list = this.props.cartoonList.toJS();
    // const list = cartoonList.toJS();
    // const MainInfo = cartoonList.value;
    const newList = [];
    for(let i = 0; i < list.length; i++) {
      newList.push(list[i].value)
    }
    console.log(newList)
    if(this.input.value) {
      for(let i = 0; i < list.length; i++) {
        if(newList[i].indexOf(this.input.value)) {
          alert('contain')
        }
      }
    }
  }
}

const mapState = (state) => ({
  cartoonList: state.getIn(['home', 'cartoonList'])
});

const mapDispatch = (dispatch) => ({
  getSearchInfo() {
    dispatch(actionCreators.getSearchInfo())
  }
})

export default connect(mapState, mapDispatch)(SearchBar);
