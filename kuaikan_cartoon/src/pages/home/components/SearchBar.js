import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  NavSearch,
  Search,
  SearchButton
} from '../style';

class SearchBar extends PureComponent {
  render() {
    return (
      <NavSearch>
        <div className="search">
          <p className="search-icon"/>
          <Search innerRef={(icon) => {this.input = icon}}/>
          <SearchButton onClick={this.searchInfo.bind(this)}/>
        </div>
        <p className="s-img" />
      </NavSearch>
    );
  }
  componentDidMount() {
    this.props.getSearchInfo();
  }
  searchInfo() {
    const list = this.props.mainInfo.toJS();
    const infoList = this.props.allList.toJS();
    const idList = [];
    if(this.input.value) {
      for(let i = 0; i < list.length; i++) {
        const value = list[i].value;
        if(value.indexOf(this.input.value) >= 0) {
          idList.push(list[i].id)
        }
      }
    } else {
      alert('请输入关键词哦~')
    }
    this.props.compareId(idList, infoList, this.input.value)
  }
}

const mapState = (state) => ({
  mainInfo: state.getIn(['home', 'mainInfo']),
  allList: state.getIn(['home', 'allList'])
});

const mapDispatch = (dispatch) => ({
  getSearchInfo() {
    dispatch(actionCreators.getSearchInfo())
  },
  compareId(list, infoList, value) {
    dispatch(actionCreators.compareId(list, infoList, value))
  }
})

export default connect(mapState, mapDispatch)(SearchBar);
