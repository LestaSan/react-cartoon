import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';
import LoginPic from '../../statics/login.png';

export const HeaderWrapper = styled.div`
  position: relative;
  background: #282828;
  margin: 0 auto;
  width: 1263px;
  height: 54px;
  box-sizing: border-box;
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
    transform-origin: center center
  }
  .avatar {
    float: left;
    line-height: 55px;
    padding: 0 12px;
    font-size: 14px;
  }
  &.common {
    cursor: pointer;
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
`;

export const FollowInfo = styled.div`
  position: absolute;
  top: 54px;
  right: 30px;
  width: 430px;
  height: 510px;
  overflow: hidden;
  background: #333;
  z-index: 999;
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

export const Login = styled.div`
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
  text-decoration: none;
  cursor: pointer;
`;

export const Avatar = styled.div`
  float: left;
  width: 30px;
  height: 30px;
  margin-top: 12px;
  border-radius: 50%;
  overflow: hidden;
  background: url(${LogoPic}) no-repeat;
  background-size: 110%;
`

export const UserFollowed = styled.div`
  position: absolute;
  top: 54px;
  right: 30px;
  width: 280px;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  background: #333;
  z-index: 10;
  .user-content {
    line-height: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff;
  }
`;

export const Logout = styled.div`
  height: 36px;
  color: #333;
  margin-top: 50px;
  background: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
  text-decoration: none;
  cursor: pointer;
`;