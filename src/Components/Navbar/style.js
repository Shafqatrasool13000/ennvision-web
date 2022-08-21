import styled from "styled-components";
import { PrimaryColor, whiteColor } from "../GlobalStyle";


export const StyledContainer=styled.div`
background: transparent;
width: 100%;
z-index: 20;
.navbar{
background-color: ${PrimaryColor};
}
.nav-link{
color: ${whiteColor} !important;
@media screen and (min-width:991px){
&:not(:first-child){
margin-left: 27px;
}   
}
}
`