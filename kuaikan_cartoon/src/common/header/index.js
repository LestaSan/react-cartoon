import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  LogoImg,
  Nav,
  NavItem
} from './style.js'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo>
          <LogoImg/>
        </Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">APP下载</NavItem>
          <NavItem className="left">作者中心</NavItem>
          <NavItem className="right">关注</NavItem>
          <NavItem className="right">注册</NavItem>
          <NavItem className="right">登录</NavItem>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;