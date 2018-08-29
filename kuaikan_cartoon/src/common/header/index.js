import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom'; 
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
  Login,
  Avatar,
  UserFollowed,
  Logout,
  NoContent,
  FollowContain,
  CartoonItem,
  LeftBox,
  RightBox,
  Box
} from './style.js'

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
    const { account, handleFollowInfoShow, handleFollowInfoHide, MouseOverUser } = this.props;
    if(!isLogin) {
      return (
        <div>
          <NavItem className="right common">注册</NavItem>
          <Link to="/login">
            <NavItem className="right common">登录</NavItem>
          </Link>
        </div>
      );
    } else {
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
  getFollowInfo() {
    const { MouseOver, IsMouseEnter, handleMouseEnter, handleMouseLeave } = this.props;
    if(MouseOver || IsMouseEnter) {
      return (
        <FollowInfo 
          onMouseEnter={() => {handleMouseEnter(this.icon)}}
          onMouseLeave={() => {handleMouseLeave(this.icon)}}
        >
          {
            this.showItem()
          }
        </FollowInfo>
      );
    }
  }
  showItem() {
    const { isLogin, followItem } = this.props;
    if(!isLogin) {
      return (
        <div>
          <Img/>
          <LoginItem>
            <LoginContent>未登录</LoginContent>
            <LoginContent>登录后即可关注喜欢的漫画</LoginContent>
          </LoginItem>
          <Link to="/login">
            <Login>登录</Login>
          </Link>
        </div>
      );
    } else {
      if(followItem.size < 1) {
        return <NoContent>大大您什么都没有收藏哦~</NoContent>
        
      }
      
      return this.getCartoonList()
    }
  }
  getCartoonList() {
    const { followItem } = this.props;
    const list = followItem.toJS();
    return (
      <FollowContain>
       {
          list.map(item => {
            return (
              <CartoonItem key={item.id}>
                <LeftBox>
                  <img src={item.imgUrl} alt=""/>
                </LeftBox>
                <RightBox>
                  <Box className="one">
                    <p>{item.title}</p>
                  </Box>
                  <Box className="two">
                    <p>{item.author}</p>
                  </Box>
                  <Box className="three">
                    <p>更新至：第{item.id}话</p>
                  </Box>
                </RightBox>
              </CartoonItem>
            )
          })
       }
      </FollowContain>
    )
  }
}


const mapStateToProps = (state) => ({
  MouseOver: state.get('header').get('MouseOver'),
  IsMouseEnter: state.getIn(['header','IsMouseEnter']),
  MouseOverUser: state.getIn(['header', 'MouseOverUser']),
  IsMouseEnterUser: state.getIn(['header', 'IsMouseEnterUser']),
  isLogin: state.getIn(['login', 'isLogin']),
  account: state.getIn(['login', 'account']),
  followItem: state.getIn(['detail', 'followItem'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleFollowInfoShow(icon) {
      if(icon.className) {
        icon.style.transform = 'rotate(180deg)';
        const action = actionCreators.FollowInfoShow();
        dispatch(action)
      }
      dispatch(actionCreators.userFollowedShow())
    },
    handleFollowInfoHide(icon) {
      if(icon.className) {
        icon.style.transform = 'rotate(0deg)';
        const action = actionCreators.FollowInfoHide();
        dispatch(action)
      }
      dispatch(actionCreators.userFollowedHide())
    },
    handleMouseEnter(icon) {
      if(icon.className) {
        const action = actionCreators.MouseEnter();
        dispatch(action)
      }
      dispatch(actionCreators.MouseEnterUser())
    },
    handleMouseLeave(icon) {
      if(icon.className) {
        const action = actionCreators.MouseLeave();
        dispatch(action)
      }
      dispatch(actionCreators.MouseLeaveUser())
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);