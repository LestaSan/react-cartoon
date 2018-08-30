import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ListContain from './ListContain';
import {
  InfoWrapper,
  TitleContain
} from '../style';

class Body extends PureComponent {
  render() {
    return (
      <InfoWrapper>
        <TitleContain>
            <h2 className="title">
              <i className="icon">每日更新</i>
            </h2>
        </TitleContain>
        <ListContain />
      </InfoWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'cartoonList'])
})

export default connect(mapState)(Body);