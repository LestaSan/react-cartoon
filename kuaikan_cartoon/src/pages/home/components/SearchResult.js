import React, { Component } from 'react';
import SearchContain from './SearchContain';
import { connect } from 'react-redux';
import {
  InfoWrapper,
  TitleContain
} from '../style';

class SearchResult extends Component {
  render() {
    return (
      <InfoWrapper>
        <TitleContain>
            <h2 className="title">
              <i >关键词《<i className="keyword">{this.props.value}</i>》的搜索：</i>
            </h2>
        </TitleContain>
        <SearchContain/>
      </InfoWrapper>
    );
  }
}

const mapState = (state) => ({
  value: state.getIn(['home', 'inputValue'])
})

export default connect(mapState)(SearchResult);