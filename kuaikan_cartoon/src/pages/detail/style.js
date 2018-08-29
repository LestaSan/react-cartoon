import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 6px;
  border:1px solid #e5e5e5;
  background: #fff;
`;

export const CartoonInfo = styled.div`
  overflow: hidden;
  padding: 14px 24px;
  margin-top: 16px;
  box-sizing: border-box;
`;

export const LeftBlock = styled.div`
  float: left;
  width: 340px;
  height: 212px;
  background: #eee;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
`;

export const RightBlock = styled.div`
  position: relative;
  margin-left: 380px;
`;

export const Title = styled.div`
  color: #333;
  font-size: 18px;
  padding-top: 4px;
  font-weight: 400;
`;

export const Author = styled.div`
  color: #bfbfbf;
  font-size: 14px;
`;

export const Description = styled.div`
  color: #666;
  font-size: 14px;
  margin-top: 10px;
  .desc-title {
    width: 56px;
    border-bottom: 2px solid #f5ce03;
  }
  .desc-content {
    height: auto;
    width: 100%;
    margin: 10px 0;
  }
`;

export const OtherContent = styled.div`
  position: absolute;
  top: 168px;
  font-weight: 400;
  .btn {
    display: inline-block;
  }
  .other {
    display: inline-block;
  }
`;

export const FirstInfo = styled.div`
  width: 100px;
  line-height: 34px;
  background: #ffd704;
  font-size: 14px;
  border-radius: 18px;
  border: 1px solid #f5ce03;
  color: #333;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    transition: .2s;
    background: #f5ce03;
  }
`;

export const Follow = styled.div`
  width: 100px;
  margin-left: 20px;
  line-height: 34px;
  background: #fff;
  font-size: 14px;
  border-radius: 18px;
  border: 1px solid #999;
  box-sizing: border-box;
  color: #666;
  text-align: center;
  cursor: pointer;
  &:hover {
    transition: .1s; 
    background: #e9e9e9;
  }
`;

export const Nav = styled.div`
  float: right;
  padding-left: 80px;
  padding-top: 12px;
`;

export const Box = styled.div`
  display: inline-block;
  color: #666;
  font-weight: 400;
  padding-left: 60px;
  i {
    padding-right: 4px;
  }
`