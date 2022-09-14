import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import { CustomInputContainer } from "./style";
const InputField = (props) => {
  const { label, prefix,defaultValue,maxLength, disabled , placeholder, className,border=null, name, ...rest } = props;
  return (
    <CustomInputContainer>
      <label className="text-start" htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field }) => (
          <Input
           style={{
            border,
           }}
            disabled={disabled}
            prefix={prefix}
            className={className}
            type="text"
            maxLength={maxLength}
            {...rest}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...field}
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomInputContainer>
  );
};

export default InputField;
