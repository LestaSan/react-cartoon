import styled from 'styled-components';
import BackPic_1 from '../../statics/background1.png';
import BackPic_2 from '../../statics/background2.png';
import Search_icon from '../../statics/search.png';
import TitleIcon from '../../statics/title_icon.png';


export const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
`;


export const NavSearch = styled.div`
  position: relative;
  padding-bottom: 30px;
  box-sizing: border-box;
  height: 100px;
  width: 1140px;
  margin: 0 auto;
  background: url(${BackPic_1});
  .s-img {
    position: absolute;
    left: 100px;
    top: 16px;
    height: 100px;
    width: 80%;
    background: url(${BackPic_2});
    background-repeat: no-repeat;
    background-size: contain;
  }  
  .search {
    position: relative;
    width: 650px;
    margin: 0 auto
    position: relative;
    z-index: 30;
    .search-icon {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 46px;
      left: 200px;
      z-index: 30;
      background: url(${Search_icon});
      background-size: contain;
    }
  }
`

export const Search = styled.input.attrs({
  placeholder: '搜索作品名'
})`
  box-sizing: border-box;
  border: 2px solid #724d06;
  background-color: #fbfbfb;
  border-radius: 20px;
  margin-top: 38px;
  padding: 8px 60px 8px 220px;
  width: 550px;
  text-align: left;
  outline: none;
`

export const SearchButton = styled.input.attrs({
  type: 'submit',
  name: 'button',
  value: '搜索'
})`
  background-color: #fed631;
  border-radius: 20px;
  padding: 8px 14px;
  margin-left: 8px;
  border: 2px solid #724d06;
  cursor:pointer;
  outline: none;
`;

export const InfoWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  background: #fff;
  box-sizing: border-box;
`;

export const TitleContain = styled.div`
  padding: 12px;
  background: #fbfbfb;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  .title {
    font-size: 16px;
    color: #666;
    .icon {
      padding-left: 12px;
      font-style: normal;
      line-height: 20px;
      background: url(${TitleIcon}) no-repeat;
    }
  }
`;

export const Container = styled.div`
  padding: 12px 18px;
`;

export const ListItem = styled.a`
  width: 260px;
  position: relative;
  display: inline-block;
  margin: 10px 6px;
  box-sizing: border-box;
`;

export const PicBox = styled.div`
  width: 163px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    .cartoon-title {
      color: #fed631;
    }
  }
  .cartoon-title {
    display: block;
    color: #333;
    font-size: 14px;
    margin: 6px 4px;
  }
  .pic-container {
    position: relative;
    height: 142px;
    display: block;
    overflow: hidden;
    &:hover {
      p + img {
        transition: all .2s ease-in;
        transform: translateY(-6px);
        border: 1px solid #fed631;
      }
    }
    .high-light {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      &:hover {
        background-color: rgba(255,255,255,.3)
      }
    }
    .item-pic {
      display: block;
      width: 260px;
      height: 163px;
      padding: 1px;
      margin-bottom: 10px;
      border: 1px solid #eee;
      box-sizing: border-box;
      cursor: pointer;
      transition: all .2s ease-in;
      transform: translateY(0);
      z-index: 20;
    }
  }
`;


export const DescBox = styled.div`
  padding: 0 4px;
  margin: 10px 0;
  .author {
    width: 122px;
    float: left;
    font-size: 14px;
    color: #bfbfbf;
    text-overflow: ellipsis;
  }
`;

export const Praise = styled.div`
  float: right;
  color: #bfbfbf;
  font-size: 14px;
  letter-spacing: .4px;
  line-height: 16px;
  background-size: contain;
  vertical-align: top;
`

