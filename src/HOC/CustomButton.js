import * as React from "react";
import { Button } from "@material-ui/core";


export const CustomButton = ({
  field, // { name, value, onChange, onBlur }
  form , // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  
  return (
    <div>
      <Button {...field} {...props} />
      
    </div>
  );
};