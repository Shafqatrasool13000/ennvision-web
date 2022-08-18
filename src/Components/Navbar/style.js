import styled from "styled-components";
import { whiteColor } from "../GlobalStyle";


export const StyledContainer=styled.div`
background: transparent;
width: 100%;
z-index: 20;
.nav-link{
color: ${whiteColor} !important;
&:not(:first-child){
margin-left: 27px;
}
}
`