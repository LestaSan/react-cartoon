import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  LoginContainer,
  LoginForm,
  Input,
  Button
} from './style';

class Login extends PureComponent {
  render() {
    const { getLoginState, isLogin } = this.props;
    if(!isLogin) {
      return (
        <LoginContainer>
          <LoginForm>
            <Input type="text" placeholder="请输入账号" innerRef={(input) => {this.account = input}}/>
            <Input type="password" placeholder="请输入密码" innerRef={(input) => {this.password = input}}/>
            <Button onClick={() => { getLoginState(this.account, this.password) }}>登录</Button>
          </LoginForm>
        </LoginContainer>
      );
    } else {
      return <Redirect to="/"/>
    }
  }
  goHomePage() {

  }
}

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
});

const mapDispatch = (dispatch) => ({
  getLoginState(accountElem, passwordElem) {
    if(accountElem.value && passwordElem.value) {
      dispatch(actionCreators.getLoginState());
    } else {
      alert('账号及密码不正确')
    }
  }
})

export default connect(mapState, mapDispatch)(Login);