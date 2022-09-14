import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";

import { Input } from "antd";
import { InputStyleContainer } from "./Style";

const PasswordField = (props) => {
  const { label,className, placeholder,border=null, name, ...rest } = props;
  return (
    <InputStyleContainer>
      {/* <label htmlFor={name}>{label}</label> */}
      <Field name={name} id={name}>
        {({ field, form, meta }) => (
          <Input.Password
          style={{border}}
            className={className}
            {...rest}
            placeholder={placeholder}
            {...field}
            iconRender={(visible) =>
              visible ? (
                <span className="hide-label">Hide</span>
              ) : (
                <span className="show-label">Show</span>
              )
            }
          />
   
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </InputStyleContainer>
  );
};

export default PasswordField;
