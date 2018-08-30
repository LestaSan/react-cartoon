import React, { Component } from 'react';
import User from './components//User';
import FollowedList from './components/FollowList';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  LogoImg,
  Nav,
  NavItem,
  FollowInfo,
} from './style.js';

class Header extends Component {
  render() {
    const { MouseOver, handleFollowInfoHide, handleFollowInfoShow, isLogin} = this.props;
    return (
      <HeaderWrapper>
        <Logo>
          <LogoImg/>
        </Logo>
        <Nav>
          <NavItem className="left active common">首页</NavItem>
          <NavItem className="left common" >APP下载</NavItem>
          <NavItem className="left common">作者中心</NavItem>
          <NavItem 
            className={MouseOver ? 'right follow' : 'right'}
            onMouseOver={() => {handleFollowInfoShow(this.icon)}}
            onMouseOut={() => {handleFollowInfoHide(this.icon)}}
          >
            关注
            <i ref={(icon) => {this.icon = icon}} className="iconfont">&#xe644;</i>
            { this.getFollowInfo() }
          </NavItem>
          {
            this.getLoginState(isLogin)
          }
        </Nav>
      </HeaderWrapper>
    );
  }
  getLoginState (isLogin) {
    if(!isLogin) {
      return (
        <div>
          <NavItem className="right common">注册</NavItem>
          <Link to="/login">
            <NavItem className="right common">登录</NavItem>
          </Link>
        </div>
      );
    }
    return <User/>
  }
  getFollowInfo() {
    const { MouseOver, IsMouseEnter, handleMouseEnter, handleMouseLeave } = this.props;
    if(MouseOver || IsMouseEnter) {
      return (
        <FollowInfo 
          onMouseEnter={() => {handleMouseEnter(this.icon)}}
          onMouseLeave={() => {handleMouseLeave(this.icon)}}
        >
          <FollowedList />
        </FollowInfo>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  MouseOver: state.get('header').get('MouseOver'),
  IsMouseEnter: state.getIn(['header','IsMouseEnter']),
  isLogin: state.getIn(['login', 'isLogin']),
  account: state.getIn(['login', 'account']),
})

const mapDispatch = dispatch => {
  return {
    handleFollowInfoShow(icon) {
      icon.style.transform = "rotate(180deg)";
      dispatch(actionCreators.FollowInfoShow());
    },
    handleFollowInfoHide(icon) {
      icon.style.transform = "rotate(0deg)";
      dispatch(actionCreators.FollowInfoHide());
    },
    handleMouseEnter(icon) {
      dispatch(actionCreators.MouseEnter());
    },
    handleMouseLeave(icon) {
      dispatch(actionCreators.MouseLeave());
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(Header);