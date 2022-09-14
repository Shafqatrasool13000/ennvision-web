import styled from "styled-components";
import { secondaryDark3, whiteColor } from "../GlobalStyle";


export const NavbarStyled = styled.div`
background: ${whiteColor};
padding: 4px 0;
img{
cursor: pointer;
}
.right-side{
.name{
margin-bottom:0;
color: ${secondaryDark3};
font-size: 14px;
}
img{
margin-left: 8px;
}
}
`