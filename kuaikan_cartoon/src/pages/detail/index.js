import React, { Component } from 'react';
import {
  DetailContainer,
  CartoonInfo,
  LeftBlock,
  RightBlock,
  Title,
  Author,
  Description,
  OtherContent,
  FirstInfo,
  Follow,
  Nav,
  Box
} from './style';

class Detail extends Component {
  render() {
    return <DetailContainer>
        <CartoonInfo>
          <LeftBlock>
            <img src="https://i1s.kkmh.com/image/170104/s3mkjo1ls.webp-w750.jpg" alt="" />
          </LeftBlock>
          <RightBlock>
            <Title>一条狗</Title>
            <Author>使徒子</Author>
            <Description>
              <p className="desc-title">漫画简介</p>
              <div className="desc-content">
                人与狗互换，将会发生什么爆笑情节？【授权/完结 责编：喵二】
              </div>
            </Description>
            <OtherContent>
              <FirstInfo className="btn">查看第一话</FirstInfo>
              <Follow className="btn">关注</Follow>
              <Nav>
                <Box>
                  <i className="iconfont">&#xe660;</i>
                  分享
                </Box>
                <Box>
                <i className="iconfont">&#xe6b6;</i>
                  5.83亿
                </Box>
                <Box>
                  <i className="iconfont">&#xe668;</i>
                  631万
                </Box>
              </Nav>
            </OtherContent>
          </RightBlock>
        </CartoonInfo>
      </DetailContainer>;
  }
}

export default Detail;