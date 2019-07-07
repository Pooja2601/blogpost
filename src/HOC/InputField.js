import * as React from "react";
import { TextField } from "@material-ui/core";


const CustInputField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <div>
      <TextField {...field} {...props} />
      <div style={{color:"red"}}>{errorMsg}</div>
    </div>
  );
};
export default CustInputField;