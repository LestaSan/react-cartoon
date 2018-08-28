import React, { PureComponent } from 'react';
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

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.list = props.location.state.data;
  }
  render() {
    return (
      <DetailContainer>
        <CartoonInfo>
          <LeftBlock>
            <img src={this.list.imgUrl} alt="" />
          </LeftBlock>
          <RightBlock>
            <Title>{this.list.title}</Title>
            <Author>{this.list.author}</Author>
            <Description>
              <p className="desc-title">漫画简介</p>
              <div className="desc-content">
                {this.list.description}
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
                  {this.list.hot}
                </Box>
                <Box>
                  <i className="iconfont">&#xe668;</i>
                  {this.list.praise}
                </Box>
              </Nav>
            </OtherContent>
          </RightBlock>
        </CartoonInfo>
      </DetailContainer>
    );
  }
}

export default Detail;