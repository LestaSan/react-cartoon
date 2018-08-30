import React, { PureComponent } from 'react';
import SearchContain from './SearchContain';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import {
  InfoWrapper,
  TitleContain
} from '../style';

class SearchResult extends PureComponent {
  render() {
    const { handleClosed, isShowed } = this.props;
    return (
      <div>
        {
          isShowed && this.props.value ? 
          <InfoWrapper>
            <TitleContain>
              <h2 className="title">
                <i >关键词《<i className="keyword">{this.props.value}</i>》的搜索：</i>
              </h2>
              <div className="close" onClick={handleClosed}/>
            </TitleContain>
            <SearchContain/>
          </InfoWrapper> :
          null
        }
      </div>
    );
  }
}

const mapState = (state) => ({
  value: state.getIn(['home', 'inputValue']),
  isShowed: state.getIn(['home', 'isShowed'])
});

const mapDispatch = (dispatch) => ({
  handleClosed() {
    dispatch(actionCreators.handleClosed())
  }
});

export default connect(mapState, mapDispatch)(SearchResult);