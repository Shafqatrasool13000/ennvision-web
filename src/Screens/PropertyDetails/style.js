import styled from "styled-components";
import { greenishColor, lightGrey5, PrimaryColor, pureDark, secondaryDark4, tertiaryGrey5, tertiaryGrey7, whiteColor } from "../../Components/GlobalStyle";

export const PropertyDetailsStyled=styled.div`
padding-top: 100px;
padding-bottom: 120px;
.imgs-gallery{
margin-top: 10px;
img{
margin-top: 10px;
}
.img-large{
height: 528px;
}
}
.property-details{
margin-top: 24px;
background: ${whiteColor};
border: 1px solid ${lightGrey5};
border-radius: 5px;
display: grid;
grid-template-columns: repeat(5,1fr);
img{
height: 19px;
}
&-box{
&:not(:last-child){
border-right:1px solid ${tertiaryGrey5};
}
&-inner{
padding: 20px;
.name{
color: ${tertiaryGrey7};
}
.quantity{
font-family: 'EnnVisionsMedium';
font-size: 18px;
}
}    
}
}
.owner-details{
border: 1px solid ${lightGrey5};
border-radius: 5px;
padding: 14px;
margin-top: 22px;
.listed-by{
color: ${tertiaryGrey7};
font-size: 16px;
}

.bio{
h6{
font-size: 18px;
font-family: 'EnnVisionsMedium';
color: ${pureDark};
}
.branch{
color: ${tertiaryGrey7};
font-size: 16px;
}
.location{
color: ${secondaryDark4};
font-size: 14px;
}
}
.sold-properties{
.title{
color: ${tertiaryGrey7};
font-size: 15px;
}
.chat-btn{
background: ${greenishColor};
border-radius: 5px;
font-size: 16px;
padding: 14px;
color: ${whiteColor};
}
.call-btn{
background: ${PrimaryColor};
border-radius: 5px;
font-size: 16px;
padding: 14px;
color: ${whiteColor};

}
}

}
`