import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  LogoImg,
  Nav,
  NavItem,
  FollowInfo,
  Img,
  LoginContent,
  LoginItem,
  Login
} from './style.js'

const getFollowInfo = (show) => {
  if(show) {
    return (
      <FollowInfo>
        <Img/>
        <LoginItem>
          <LoginContent>未登录</LoginContent>
          <LoginContent>登录后即可关注喜欢的漫画</LoginContent>
        </LoginItem>
        <Login>登录</Login>
      </FollowInfo>
    )
  }
}

const Header = (props) => {
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
          className={props.MouseOver ? 'right follow' : 'right'}
          onMouseOver={props.handleFollowInfoShow}
          onMouseOut={props.handleFollowInfoHide}
        >
          关注
          { getFollowInfo(props.MouseOver) }
        </NavItem>
        <NavItem className="right common">注册</NavItem>
        <NavItem className="right common">登录</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}


const mapStateToProps = (state) => ({
  MouseOver: state.get('header').get('MouseOver')
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleFollowInfoShow() {
      const action = actionCreators.FollowInfoShow;
      dispatch(action)
    },
    handleFollowInfoHide() {
      const action = actionCreators.FollowInfoHide;
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);