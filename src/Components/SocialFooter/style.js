import styled from 'styled-components';
import { whiteColor } from '../GlobalStyle';

export const SocialFooterStyled=styled.div`
.hero-footer{
background-color: ${whiteColor};
margin-top: 70px;
box-shadow: 0px -2px 6px #00000029;
.icon{
cursor: pointer;
&:not(:first-child){
margin-left: 12px;
}
}
}

`