import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';
import LoginPic from '../../statics/login.png';

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
`

export const NavItem = styled.div`
  line-height: 55px;
  padding: 0 12px;
  font-size: 14px;
  color: #fff;
  .iconfont {
    display: block;
    float: right;
    font-size: 16px;
    margin-left: 6px;
    color: #878787;
    transition: all .3s ease-in;
    // transform: rotate(180deg);
    transform-origin: center center
  }
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

export const Img = styled.div`
  position: absolute
  top: 125px;
  left: 168px;
  width: 96px;
  height: 96px;
  background: url(${LoginPic});
`

export const LoginItem = styled.div`
  position: absolute;
  top: 214px;
  left: 120px;
`

export const LoginContent = styled.div`
  line-height: 55px;
  padding: 0 12px;
  font-size: 14px;
  color: #fff;
  text-align: center;
`

export const Login = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  left: 116px;
  bottom: 140px;
  width: 200px;
  height: 44px;
  color: #333;
  background: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  text-decoration: none
`