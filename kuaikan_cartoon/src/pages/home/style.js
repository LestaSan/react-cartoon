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
    top: 14px;
    height: 100px;
    width: 100%;
    background: url(${BackPic_2});
    background-repeat: no-repeat;
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
  position: relative;
  margin: 10px 6px;
  box-sizing: border-box;
  .pic-box {
    height: 142px;
    overflow: hidden
    .item-pic {
      display: block;
      width: 260px;
      height: 163px;
      margin-bottom: 10px;
      border: 1px solid transparent;
      box-sizing: border-box;
      &:hover {
        transition: all .2s ease-in;
        transform: translateY(-6px);
      }
      transition: all .2s ease-in;
      transform: translateY(0);
    }
  }
  
  .tag {
    color: #333;
    font-size: 14px;
    margin: 6px 4px;
  }
`

