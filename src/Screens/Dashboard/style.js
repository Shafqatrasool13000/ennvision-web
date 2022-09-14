import styled from 'styled-components';
import { lightGrey4, PrimaryColor, secondaryDark3, whiteColor } from '../../Components/GlobalStyle';

export const RoleAndCommisionsSytled=styled.div`
margin-top: 24px;

p{
font-size: 12px;
margin-bottom: 0;
color: ${secondaryDark3};
font-family: 'EnnVisionsMedium';
}
.row:not(:first-child){
.card{
margin-top: 26px;   
padding: 10px;
background: ${whiteColor};
box-shadow: 0px 0px 2px #0000001A;
border-radius: 2px;
border: none;
cursor: pointer;

}
}
.row:first-child{
margin-top: 12px;
}

`;
export const WeeklyTotalIncomeStyled=styled.div`
.red-line{
height: 2px;
background-color: ${PrimaryColor};
max-width: 120px;
}
margin-top: 24px;
p{
font-size: 12px;
margin-bottom: 0;
color: ${secondaryDark3};
font-family: 'EnnVisionsMedium';
}
.card{
cursor: pointer;
.title{
font-family:'EnnVisionsMedium';
font-size: 14px;
}
.sub_title{
color: ${lightGrey4};
}
}
.row:not(:first-child){
.card{
margin-top: 26px;   
padding: 10px;
background: ${whiteColor};
box-shadow: 0px 0px 2px #0000001A;
border-radius: 2px;
border: none;
cursor: pointer;

}
}


`;
