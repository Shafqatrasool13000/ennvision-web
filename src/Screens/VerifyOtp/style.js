import styled from "styled-components";
import {lightGrey7, pureDark } from "../../Components/GlobalStyle";

export const VerifyOtpStyled=styled.div`
text-align: center;
margin: 0 auto;
height: 93vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(33, 33, 33, 0.37);;

.inner-container{
max-width: 420px;
background: #FFFFFF;
box-shadow: 0px 0px 16px #00000017;
border-radius: 7px;
padding:18px;
.title{
font-size: 16px;
color: ${pureDark};
font-family: 'EnnVisionsBold';
margin-top: 6px;
}
img{
height: 60px;
margin-bottom: 12px;
}
.number{
color: ${pureDark};
font-family: 'EnnVisionsBold';
}
.message{
margin-top: 14px;
font-size: 14px;
margin: 0 auto;
color: ${lightGrey7};
}

}
`