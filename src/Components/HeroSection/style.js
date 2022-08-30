import styled from "styled-components";
import { lightGrey3, PrimaryColor, pureDark, secondaryDark4, whiteColor } from "../GlobalStyle";
import banner from '../../assets/Image/ic_image_1.png'

export const HeroSectionStyled=styled.div`
background: url(${banner});
background-repeat: no-repeat;
background-size: cover;
position: relative;
height: 82vh;
width: 100%;
.footer{
bottom: 10%;
}
.inner-container{
height: 100vh;
&-main-heading{
font-size: 52px;
color: ${whiteColor};
@media screen and (max-width:991px){
font-size: 40px;
}
@media screen and (max-width:786px){
text-align: center;
font-size: 32px;
}

margin: 0;
.house-up{
font-family: 'EnnVisionsMedium';
}
}
.purchase-btns{
max-width: 300px;
margin-top: 45px;
background-color: ${whiteColor};
border-radius: 7px;
height: 50px;
padding: 3px;
.active{
background-color: ${PrimaryColor};
height: 100%;
border-radius: 4px;
color: ${whiteColor};
}
button{
background: transparent;
font-size: 18px;
}
}
.location-select-section{
max-width: 1000px;
margin-top: 45px;
background-color: ${whiteColor};
border-radius: 7px;
width: 95%;
.title{
color: ${pureDark};
font-size: 16px;
font-family: 'EnnVisionsMedium';
}
.sub-title{
color: ${secondaryDark4};
font-size: 14px;
}
.property-type{
border-left: 1px solid ${lightGrey3};
height: 70%;
.search-box{
background-color: ${PrimaryColor};
border-radius: 4px;
padding: 12px;

img{
vertical-align: super;
}
}
@media screen and (max-width:575px){
border-left: none;
.search-box{
img{
height:20px
}
height:40px
}
}
}
}


}
`