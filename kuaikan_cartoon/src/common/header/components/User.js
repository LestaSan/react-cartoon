import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { actionCreators as loginActionCreators } from '../../../pages/login/store';
import {
  NavItem,
  Avatar,
  UserFollowed,
  Logout
} from '../style.js';

class User extends Component {
  render() {
    const { handleFollowInfoHide, handleFollowInfoShow, MouseOverUser, account} = this.props;
      return (
        <NavItem
          className={ MouseOverUser ? 'right follow' : 'right'}
          onMouseOver={handleFollowInfoShow}
          onMouseOut={handleFollowInfoHide}
        >
          <Avatar />
          <p className="avatar">{account}</p>
          {
            this.getUserFollowed() 
          }
        </NavItem>
      )
    }
  getUserFollowed() {
    const { account, logout, MouseOverUser, IsMouseEnterUser, handleMouseEnter, handleMouseLeave } = this.props;
    if(MouseOverUser || IsMouseEnterUser) {
      return (
        <UserFollowed
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="user-content">Hi，{account} 大大！</div>
          <div className="user-content">今天也要快看漫画哦~</div>
          <Logout onClick={ logout }>退出</Logout>
        </UserFollowed>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  MouseOver: state.get('header').get('MouseOver'),
  IsMouseEnter: state.getIn(['header','IsMouseEnter']),
  MouseOverUser: state.getIn(['header', 'MouseOverUser']),
  IsMouseEnterUser: state.getIn(['header', 'IsMouseEnterUser']),
  isLogin: state.getIn(['login', 'isLogin']),
  account: state.getIn(['login', 'account']),
})

const mapDispatch = (dispatch) => {
  return {
    handleFollowInfoShow(icon) {
      dispatch(actionCreators.userFollowedShow())
    },
    handleFollowInfoHide(icon) {
      dispatch(actionCreators.userFollowedHide())
    },
    handleMouseEnter(icon) {
      dispatch(actionCreators.MouseEnterUser())
    },
    handleMouseLeave(icon) {
      dispatch(actionCreators.MouseLeaveUser())
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatch)(User);