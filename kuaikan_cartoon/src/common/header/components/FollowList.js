import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'; 
import {
  Img,
  LoginItem,
  LoginContent,
  Login,
  NoContent,
  FollowContain,
  CartoonItem,
  LeftBox,
  RightBox,
  Box
} from '../style.js'

class FollowList extends Component {
  render() {
    return (
      <div>
        {
          this.showItem()
        }
      </div>
    )
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


const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin']),
  followItem: state.getIn(['detail', 'followItem'])
})

export default connect(mapState)(FollowList);