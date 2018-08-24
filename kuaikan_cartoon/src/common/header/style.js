import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  background: #282828;
  margin: 0 auto;
  width: 100%;
  height: 54px;
`

export const Logo = styled.div`
  position: absolute;
  width: 54px;
  padding: 6px;
  padding-bottom: 0;
  margin-left: 90px;
`

export const LogoImg = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  width: 44px;
  height: 44px;
  background: url(${LogoPic});
  background-size: contain;
  background-repeat: no-repeat;
`

export const Nav = styled.div`
  width: 1200px;
  height: 100%;
  padding-left: 290px;
  padding-right: 60px;
  box-sizing: border-box;
  margin: 0 auto;
  // background: red;
`

export const NavItem = styled.div`
  line-height: 55px;
  padding: 0 12px;
  font-size: 14px;
  color: #fff;
  &.common {
    &:hover {
      color: #ffd900;
    }
  }
  &.follow {
    &:hover {
      background: #333
    }
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ffd900;
  }
  
`

export const FollowInfo = styled.div`
  position: absolute;
  top: 54px;
  right: 30px;
  width: 430px;
  height: 510px;
  overflow: hidden;
  background: #333;
` 
