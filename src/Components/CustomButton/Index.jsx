import React from "react";
import { Button } from "antd";
import { CustormButtonContainer } from "./style";

const CustomButton = ({ title, type, bgcolor, disabled , width, color, padding , clicked , form , key,fontSize }) => {
  return (
    <CustormButtonContainer
    bgcolor={bgcolor}
      color={color}
      width={width}
      padding={padding}
      fontSize={fontSize}
    >
      <Button disabled={disabled} form={form} key={key} onClick={clicked} htmlType={type}>{title}</Button>
    </CustormButtonContainer>
  );
};

export default CustomButton;
