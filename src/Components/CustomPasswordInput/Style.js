import styled from "styled-components";
import { BasicColor, lightblue, tertiaryGrey12 } from "../GlobalStyle";

export const InputStyleContainer = styled.div`

.ant-input-password{
 
}
input[type='text'] {
.ant-input-password{
  font-size: 14px;
  color: ${tertiaryGrey12};
}
}
.show-label{
font-size: 14px !important;
color: ${lightblue} !important;
cursor: pointer;
}
.hide-label{
  }
  .show-label{
   

  }
  .customPasswordInput {
    background: white;
    border: 1px solid #c6c6c8;
    border-radius: 4px;

    input{
      border: none;
      outline: none;
      width: 83%;
    }
  }
  .hide-label{
    font-size: 14px;
    color: ${tertiaryGrey12};
  }
  .show-label{
    font-size: 14px;
    color: lightblue;

  }

  .ant-input-suffix span {
    font-size: 12px;
    font-weight: normal;
    color: ${BasicColor};
  }

`;
