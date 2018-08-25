import styled from 'styled-components';
import BackPic_1 from '../../statics/background1.png';
import BackPic_2 from '../../statics/background2.png';
import Search_icon from '../../statics/search.png';


export const HomeContainer = styled.div`
  position: relative;
  width: 1200px;
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
`
