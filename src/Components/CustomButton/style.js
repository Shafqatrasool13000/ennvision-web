import styled from "styled-components";

export const CustormButtonContainer = styled.div`
  /* width: 100%; */

  width: ${(props) => props.width+"px"};
  @media screen and (max-width:1400px) {
    width: ${(props) => (props.width*.7)+"px"};
  }
  @media screen and (max-width:1024px) {
  width: ${(props) => (props.width*.5)+"px"};
  }
  .ant-btn {
    border: none;
    outline: none;
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding.split(" ").map((title)=>title+"px").join(",").replace(/,/g,' ')};
    
    font-size: ${(props)=>props.fontSize+"px"};
    border-radius: 4px;
    width: -moz-available;
    width: -webkit-fill-available;
    height: auto;
    cursor: pointer;
    &:hover {
    outline: none;
    }
    @media screen and (max-width:1400px) {
    padding: ${(props) => props.padding.split(" ").map((title)=>(title*.7)+"px").join(",").replace(/,/g,' ')};
    font-size: ${(props)=>props.fontSize*.7+"px"};
    width: ${(props) => (props.width*.7)+"px"};
    }
    @media screen and (max-width:1024px) {
    padding: ${(props) => props.padding.split(" ").map((title)=>(title*.5)+"px").join(",").replace(/,/g,' ')};
    font-size: ${(props)=>props.fontSize*.5+"px"};

    }
  }
`;
