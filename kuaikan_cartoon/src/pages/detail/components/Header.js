import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  CartoonInfo,
  LeftBlock,
  RightBlock,
  Title,
  Author,
  Description,
  OtherContent,
  FirstInfo,
  Follow,
  Nav,
  Box
} from '../style';
import { CANCLE_FOLLOWED } from '../store/actionTypes';

class Header extends Component {
  constructor(props) {
    super(props);
    this.list = props.list.mainContent;
  }
  render() {
    const { followCartoon, cancleFollowed, isLogin, followItem, id } = this.props;
    this.followItem = followItem.toJS();
    return (
        <CartoonInfo>
          <LeftBlock>
            <img src={this.list.imgUrl} alt="" />
          </LeftBlock>
          <RightBlock>
            <Title>{this.list.title}</Title>
            <Author>{this.list.author}</Author>
            <Description>
              <p className="desc-title">漫画简介</p>
              <div className="desc-content">
                {this.list.description}
              </div>
            </Description>
            <OtherContent>
              <FirstInfo className="btn other">查看第一话</FirstInfo>
              {
                isLogin && this.checkFollowed(this.followItem, this.list.id) ? 
                <Follow 
                  className="btn other" 
                  onClick={() => cancleFollowed(this.list.id, this.followItem)}
                >
                  取消关注
                </Follow> :
                <Follow 
                  className="btn other"
                  onClick={() => followCartoon(this.props.list, this.list.id, isLogin)}
                >
                  关注
                </Follow>
              }
              <Nav className="other">
                <Box>
                  <i className="iconfont">&#xe660;</i>
                  分享
                </Box>
                <Box>
                <i className="iconfont">&#xe6b6;</i>
                  {this.list.hot}
                </Box>
                <Box>
                  <i className="iconfont">&#xe668;</i>
                  {this.list.praise}
                </Box>
              </Nav>
            </OtherContent>
          </RightBlock>
        </CartoonInfo>
    );
  }
  checkFollowed(newList, id)  {
    const arr = [];
    for(let i = 0; i < newList.length; i ++) {
      arr.push(newList[i].id)
    }
    if(arr.indexOf(id) >= 0) return true
  }
}

const mapState = (state) => ({
  followItem: state.getIn(['detail', 'followItem']),
  id: state.getIn(['detail', 'id']),
  isLogin: state.getIn(['login', 'isLogin']),
})

const mapDispatch = (dispatch) => ({
  followCartoon(list, id, isLogin) {
    if(!isLogin) {
      alert('请您先登录哦~')
    } else {
      dispatch(actionCreators.setFollowCartoon(list.mainContent, id));
    }
  },
  cancleFollowed(id, list) {
    dispatch(actionCreators.cancleFollowed(id, list));
  }
})

export default connect(mapState, mapDispatch)(Header);