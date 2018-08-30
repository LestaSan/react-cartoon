import styled from 'styled-components';
import Pic from '../../statics/login-background.png';

export const LoginContainer = styled.div`;
  position: relative;
  margin: 0 auto;
  width: 1263px;
  height: 600px;
  background: url(${Pic}) no-repeat 170px 100px;
  background-color: #fbfbfb;
`;

export const LoginForm = styled.div`;
  width: 270px;
  position: absolute;
  right: 14%;
  top: 45%;
  transform: translateY(-50%);
`;

export const Input = styled.input`;
  width: 100%;
  height: 29px;
  margin-bottom: 15px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fbfbfb;
`;

export const Button = styled.div`;
  width: 100%;
  height: 35px;
  margin-top: 15px;
  border-radius: 20px;
  font-size: 14px;
  background: #fadc41;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
`;