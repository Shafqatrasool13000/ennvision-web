import styled from "styled-components";
import { PrimaryColor, pureDark, secondaryDark3 } from "../../Components/GlobalStyle";
import banner from '../../assets/icons/ic_side_banner.svg'

export const ResetPasswordStyled = styled.div`
.left-side-img{
background-image:url(${banner});
background-size: contain;
height: 100vh;
background-repeat: no-repeat;
}

.right-side{
max-width: 575px;
display: flex;
flex-direction: column;
justify-content: center;
height: 90vh;
margin: 0 auto;
.img-logo{
img{
width: 332px;
height: 66px;
}
}
.main-heading{
font-size: 28px;
color: ${secondaryDark3};
font-weight: 700;
margin-top: 24px;
line-height: 30px;
letter-spacing: 1px;
}  
.mini-heading{
color: ${pureDark};
font-size: 14px;
font-weight:700;
}
.password-input{
h6{
right: 4%;
bottom: 15%;
color: ${PrimaryColor};
cursor: pointer;
font-size: 18px;
}
}
.reset-footer{
p{
color: ${PrimaryColor};
font-weight: 500;
cursor: pointer;
font-size: 18px;
}
}
}  
@media screen and (max-width:1400px) {
.left-side-img{
background-size: cover;
}
.right-side{
max-width: 420px;
.img-logo{
img{
width: 270px;
}
}
.main-heading{
font-size: 26px;
margin-top: 24px;
line-height: 27px;
}
.password-input{
h6{
font-size: 16px;
}
}
.reset-footer{
p{
font-size: ${18*.8}px;
}
}
}
}
@media screen and (max-width:1024px) {
.right-side{
max-width: 350px;

.img-logo{
img{
width: 230px;
}
}
.main-heading{
font-size: 24px;
margin-top: 22px;
line-height: 24px;
}
.password-input{
h6{

font-size: 14px;
}
}
.reset-footer{
p{
font-size: ${18*.7}px;
}
} 
}
}
`;




